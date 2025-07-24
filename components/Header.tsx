export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between p-4 bg-white dark:bg-stone-900" aria-label="Main Navigation">
      <div className="font-bold text-brand-primary">Politic</div>
      <button className="hidden md:block px-4 py-2 bg-brand-accent text-white rounded" aria-label="Donate">Donate</button>
      <button className="md:hidden" aria-label="Open menu">☰</button>
    </header>
  )
}
