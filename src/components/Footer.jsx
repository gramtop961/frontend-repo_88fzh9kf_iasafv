export default function Footer() {
  return (
    <footer className="w-full bg-black py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} StudioFlix. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            {['Privacy','Terms','Contact','Help'].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-400 transition hover:text-white hover:underline">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
