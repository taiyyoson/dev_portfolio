export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 15',
      date: '2024-03-15',
      excerpt: 'Exploring the latest features in Next.js 15 and how they improve developer experience...',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Building Interactive 3D Experiences with Three.js',
      date: '2024-03-10',
      excerpt: 'A deep dive into creating immersive 3D web experiences using Three.js and React Three Fiber...',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'The Power of Server Components',
      date: '2024-03-05',
      excerpt: 'Understanding React Server Components and when to use them in your applications...',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Modern CSS Techniques for 2024',
      date: '2024-02-28',
      excerpt: 'Exploring modern CSS features like container queries, cascade layers, and more...',
      readTime: '7 min read',
    },
  ]

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-4 text-slate-100">Blog</h1>
      <p className="text-slate-400 mb-12">Thoughts on web development and technology</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-semibold text-slate-100 mb-3 hover:text-cyan-400 transition-colors">
              {post.title}
            </h2>

            <p className="text-slate-300 mb-4">
              {post.excerpt}
            </p>

            <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
