export default function PageHero({ label, title }) {
  return (
    <div className="ph page-fade">
      <div className="ph-inner">
        <span className="ph-label">{label}</span>
        <h1 className="ph-title">{title}</h1>
      </div>
    </div>
  )
}
