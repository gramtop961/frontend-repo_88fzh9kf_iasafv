import { useRef } from 'react'
import { motion } from 'framer-motion'

const posters = [
  'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451471016731-e963a8588be8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=800&auto=format&fit=crop',
]

export default function Carousel() {
  const scrollerRef = useRef(null)

  return (
    <section className="w-full bg-black py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">Trending Now</h2>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6"
        >
          {posters.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative h-44 w-32 flex-none overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10 sm:h-60 sm:w-40"
            >
              <img
                src={`${src}&ixlib=rb-4.0.3`}
                alt="Poster"
                className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0 hover:brightness-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
