export default function About() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-slate-100">About Me</h1>

      <div className="space-y-6 text-slate-300">
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Bio</h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Passionate developer
            with expertise in building scalable web applications. Experienced in modern
            JavaScript frameworks and full-stack development.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Next.js', 'Three.js', 'TypeScript',
              'Python', 'SQL', 'Git'].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 px-4 py-3 rounded-lg text-center border border-slate-700 hover:border-cyan-500 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Experience</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100">Senior Developer</h3>
              <p className="text-cyan-400 mb-2">Company Name • 2020 - Present</p>
              <p className="text-slate-300">
                Led development of key features and mentored junior developers.
                Improved application performance by 40%.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-slate-100">Developer</h3>
              <p className="text-cyan-400 mb-2">Previous Company • 2018 - 2020</p>
              <p className="text-slate-300">
                Developed and maintained multiple web applications using React and Node.js.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
