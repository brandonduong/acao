async function getPosts() {
  const res = await fetch(`https://acao.media/wp-json/wp/v2/posts`);
  const posts = await res.json();

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts && posts.map((p) => <div>{p.id}</div>)}
    </main>
  );
}
