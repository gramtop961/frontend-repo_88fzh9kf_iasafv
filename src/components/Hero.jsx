import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // For demo only
    alert(`Welcome! We will notify: ${email || 'your email'}`)
  }

  return (
    <section className="relative isolate min-h-[80vh] w-full overflow-hidden bg-black">
      {/* Cinematic black & white background */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: 'grayscale(100%)',
        }}
      />

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_70%_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Unlimited Movies & Series
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg"
        >
          Watch anywhere. Cancel anytime.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 flex w-full max-w-xl items-center gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-full bg-neutral-950/70 px-5 py-3 text-white placeholder-gray-500 outline-none ring-1 ring-white/10 transition focus:ring-white/20"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_8px_rgba(255,255,255,0.06)] active:scale-100"
          >
            Get Started
          </button>
        </motion.form>
      </div>
    </section>
  )
}
