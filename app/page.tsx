import prisma from "./lib/db";

export default async function Home() {
  const posts = await prisma.product.findMany()
  return (
   <div>
    {posts.map((post:any) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    ))}
   </div>
  );
}
