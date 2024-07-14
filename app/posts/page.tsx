import client from "@/tina/__generated__/client";

const page = async () => {
  const connection = await client.queries.postConnection();
  const posts = connection.data.postConnection.edges;
  console.log(`posts len: ${posts?.length}`);
  return (
    <div>
      <ol>
        {posts?.map((post) => (
          <li key={post?.node?.id}>{post?.node?.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default page;

