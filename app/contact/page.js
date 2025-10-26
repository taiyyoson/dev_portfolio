export default function Contact() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-4 text-slate-100">Get In Touch</h1>
      <p className="text-slate-400 mb-12">
        Feel free to reach out for collaborations or just a friendly hello
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                <span className="text-cyan-400">📧</span>
              </div>
              <div>
                <h3 className="text-slate-100 font-semibold">Email</h3>
                <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                <span className="text-cyan-400">💼</span>
              </div>
              <div>
                <h3 className="text-slate-100 font-semibold">LinkedIn</h3>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                <span className="text-cyan-400">🐙</span>
              </div>
              <div>
                <h3 className="text-slate-100 font-semibold">GitHub</h3>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  github.com/yourusername
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                <span className="text-cyan-400">🐦</span>
              </div>
              <div>
                <h3 className="text-slate-100 font-semibold">Twitter</h3>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  @yourhandle
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Send a Message</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-slate-100"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-slate-100"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-slate-100 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
