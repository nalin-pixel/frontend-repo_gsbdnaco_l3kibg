export default function ThreeColumns() {
  const cols = [
    { title: 'Sense', body: "HAAI understands what's happening across your clinic in real time." },
    { title: 'Streamline', body: 'It smooths the transitions between patients, clinicians, and tasks.' },
    { title: 'Support', body: 'It assists every moment of care with intelligent the-right-time guidance.' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white/90">
      {cols.map((c) => (
        <div key={c.title} className="border-l border-white/10 pl-6">
          <h3 className="text-xl font-medium text-white">{c.title}</h3>
          <p className="mt-3 text-white/75 leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>
  )
}
