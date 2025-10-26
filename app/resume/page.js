export default function Resume() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-5xl font-bold mb-2 text-slate-100">Resume</h1>
          <p className="text-slate-400">Full Stack Developer</p>
        </div>
        <button className="px-6 py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
          Download PDF
        </button>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 border-b border-slate-700 pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Senior Full Stack Developer</h3>
                  <p className="text-cyan-400">Tech Company Inc.</p>
                </div>
                <span className="text-slate-400">2020 - Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Led development of microservices architecture serving 1M+ users</li>
                <li>Improved application performance by 40% through optimization</li>
                <li>Mentored team of 5 junior developers</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Full Stack Developer</h3>
                  <p className="text-cyan-400">Previous Company LLC</p>
                </div>
                <span className="text-slate-400">2018 - 2020</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Built and maintained multiple client-facing web applications</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>Collaborated with design team to create responsive interfaces</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 border-b border-slate-700 pb-2">
            Education
          </h2>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">Bachelor of Science in Computer Science</h3>
                <p className="text-cyan-400">University Name</p>
              </div>
              <span className="text-slate-400">2014 - 2018</span>
            </div>
            <p className="text-slate-300">GPA: 3.8/4.0</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 border-b border-slate-700 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'].map((skill) => (
                  <span key={skill} className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'].map((skill) => (
                  <span key={skill} className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 border-b border-slate-700 pb-2">
            Certifications
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li>• AWS Certified Solutions Architect</li>
            <li>• Google Cloud Professional Developer</li>
            <li>• MongoDB Certified Developer</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
