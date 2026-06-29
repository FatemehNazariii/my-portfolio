import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Send, CircleCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 py-28">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-3">
          Get in touch
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Contact
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
          I’m open to opportunities, collaborations, or freelance work.
          Feel free to reach out anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* LEFT */}
        <div className="space-y-5">
          <div className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03]">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center mb-5">
              <Mail className="w-5 h-5 text-indigo-300" />
            </div>

            <p className="text-gray-400 text-sm">Email</p>

            <a
              href="mailto:nazariii0888@gmail.com"
              className="text-white mt-1 inline-block hover:text-indigo-300 transition"
            >
              nazariii0888@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://github.com/FatemehNazariii"
              target="_blank"
              rel="noreferrer"
              className="group p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-400/40 transition"
            >
              <FaGithub className="text-2xl text-gray-300 group-hover:text-white transition" />
              <p className="text-white font-medium mt-4">GitHub</p>
              <p className="text-gray-500 text-xs mt-1">View repositories</p>
            </a>

            <a
              href="https://www.linkedin.com/in/fatemeh-nazari-a0a32b324/"
              target="_blank"
              rel="noreferrer"
              className="group p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-400/40 transition"
            >
              <FaLinkedin className="text-2xl text-gray-300 group-hover:text-white transition" />
              <p className="text-white font-medium mt-4">LinkedIn</p>
              <p className="text-gray-500 text-xs mt-1">Connect with me</p>
            </a>
          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <CircleCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-white mt-1">
                  Available for freelance & collaboration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-6 md:p-7 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03]">
          <h3 className="text-white font-semibold text-lg mb-6">
            Send a Message
          </h3>

          <div className="space-y-4">
            <input
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-indigo-400/60 transition"
            />

            <input
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-indigo-400/60 transition"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-indigo-400/60 transition resize-none"
            />

            <button className="group w-full py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition flex items-center justify-center gap-2">
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}