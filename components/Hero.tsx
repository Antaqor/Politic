export default function Hero() {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4 bg-stone-100 dark:bg-stone-800">
      <h1 className="text-4xl font-serif max-w-2xl">Change Starts With You</h1>
      <p className="max-w-xl">Join our movement to build a better future for everyone.</p>
      <button className="px-6 py-3 bg-brand-accent text-white rounded" aria-label="Join now">Join Now</button>
    </section>
  )
}
