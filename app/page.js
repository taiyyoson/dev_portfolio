'use client'

import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold mb-4 text-slate-100">
          Your Name
        </h1>
        <p className="text-2xl text-cyan-400 mb-8">
          Full Stack Developer
        </p>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Building elegant solutions with modern technologies
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/projects"
            className="px-8 py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
