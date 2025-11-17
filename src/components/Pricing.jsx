import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Basic', price: 7, features: ['Good quality', '1 device at a time', 'Limited downloads'] },
  { name: 'Standard', price: 12, features: ['Better quality', '2 devices at a time', 'Downloads included'] },
  { name: 'Premium', price: 18, features: ['Best quality', '4 devices at a time', 'Unlimited downloads'] },
]

export default function Pricing() {
  return (
    <section className="w-full bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">Choose your plan</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-gray-400">Simple, transparent pricing. Cancel anytime.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-neutral-950 p-6 ring-1 ring-white/5 transition hover:border-white/15"
            >
              <div className="mb-4 flex items-end justify-between">
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <div className="text-3xl font-bold text-white">${t.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
              </div>
              <ul className="space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-0.5 rounded-full bg-white/10 p-1 ring-1 ring-white/20"><Check className="h-4 w-4 text-white"/></span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full bg-white py-3 font-semibold text-black transition hover:shadow-[0_0_0_8px_rgba(255,255,255,0.06)] hover:brightness-95">Get {t.name}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
