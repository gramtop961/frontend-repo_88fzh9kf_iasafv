import { Film, MonitorPlay, ShieldCheck, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Film,
    title: 'Cinematic Library',
    desc: 'A curated selection of blockbusters and hidden gems in crisp monochrome.'
  },
  {
    icon: MonitorPlay,
    title: 'Watch Anywhere',
    desc: 'Seamless playback on TV, laptop, tablet, and phone with instant resume.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Profiles',
    desc: 'Personalized spaces with kid-friendly controls and protected access.'
  },
  {
    icon: Download,
    title: 'Offline Mode',
    desc: 'Download to watch without internet in stunning black and white.'
  },
]

export default function Features() {
  return (
    <section className="w-full bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.li
              key={title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="group rounded-2xl border border-white/10 bg-neutral-950 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] transition hover:border-white/15"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/10 transition group-hover:ring-white/20">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
