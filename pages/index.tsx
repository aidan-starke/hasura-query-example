import type { GetServerSideProps, NextPage } from "next";
import {
	fetcher,
	GetPostsDocument,
	GetPostsQuery,
	useGetPostsQuery,
} from "@/libs/api/generated";
import { client } from "@/libs/client";
import { formatDistance } from "date-fns";

export const getServerSideProps: GetServerSideProps = async () => {
	const fetchData = fetcher(client, GetPostsDocument);

	return {
		props: {
			posts: ((await fetchData()) as GetPostsQuery)?.posts,
		},
	};
};

const Home: NextPage<{ posts: GetPostsQuery["posts"] }> = ({ posts }) => {
	const { data } = useGetPostsQuery(client, undefined, {
		refetchInterval: 5000,
		refetchIntervalInBackground: true,
	});

	const getDistance = (timestamp: string) =>
		formatDistance(new Date(timestamp), new Date(), {
			addSuffix: true,
		});

	return (
		<div className="h-screen w-screen m-auto justify-center">
			<div className="justify-center w-2/3 m-auto p-8">
				<h2 className="text-xl font-mono tracking-wide font-semibold mb-6">
					Posts
				</h2>
				<div className="space-y-6" suppressHydrationWarning>
					{(data?.posts ?? posts).map((post) => (
						<div
							key={post.id}
							className="p-4 border-2 border-pink-200 rounded space-y-2 shadow"
						>
							<p className="font-mono text-lg">
								<span className="border-b border-pink-300 p-1">
									{post.title}
								</span>
							</p>
							<p className="prose p-2">{post.content}</p>
							<div className="w-full bg-gray-200 h-px" />
							<div className="flex items-center text-sm">
								<p className="flex-1">
									By: <span className="font-mono">{post.user.username}</span>
								</p>
								<p>
									<span className="font-mono text-xs">
										{getDistance(post.created_at)}
									</span>
								</p>
							</div>
							{post?.comments?.length > 0 && (
								<h3 className="font-mono !mt-6">Comments</h3>
							)}
							<div className="space-y-4">
								{post?.comments.map((comment) => (
									<div
										key={comment.id}
										className="p-4 border-2 border-pink-200 rounded space-y-2 shadow-sm"
									>
										<p className="prose p-2">{comment.content}</p>
										<div className="w-full bg-gray-200 h-px" />
										<div className="flex items-center text-sm">
											<p className="flex-1">
												By:{" "}
												<span className="font-mono">
													{comment.user.username}
												</span>
											</p>
											<p>
												<span className="font-mono text-xs">
													{getDistance(comment.created_at)}
												</span>
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
