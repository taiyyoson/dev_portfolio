export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/placeholder1.jpg',
    },
    {
      id: 2,
      title: '3D Portfolio Website',
      description: 'Interactive portfolio with Three.js animations',
      tech: ['Next.js', 'Three.js', 'React'],
      image: '/placeholder2.jpg',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task tracker with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      image: '/placeholder3.jpg',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization',
      tech: ['Vue.js', 'API Integration', 'Charts'],
      image: '/placeholder4.jpg',
    },
    {
      id: 5,
      title: 'Social Media Clone',
      description: 'Full-featured social platform with authentication',
      tech: ['React', 'Express', 'PostgreSQL'],
      image: '/placeholder5.jpg',
    },
    {
      id: 6,
      title: 'AI Chat Interface',
      description: 'Modern chat UI with AI assistant integration',
      tech: ['Next.js', 'OpenAI API', 'Vercel'],
      image: '/placeholder6.jpg',
    },
  ]

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-4 text-slate-100">Projects</h1>
      <p className="text-slate-400 mb-12">A collection of my recent work</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all hover:transform hover:scale-105"
          >
            <div className="h-48 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Project Thumbnail</span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="w-full py-2 bg-cyan-500/10 text-cyan-400 rounded hover:bg-cyan-500 hover:text-slate-900 transition-colors font-semibold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
