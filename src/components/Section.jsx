import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Section({ id, className = '', fullWidth = false, children, ...props }) {
  const [ref, visible] = useScrollReveal()
  const base = `py-20 px-4 md:px-8 transition-all duration-700 ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`
  const widthClass = fullWidth ? '' : 'max-w-6xl mx-auto'

  const content = fullWidth ? (
    <div className="max-w-6xl mx-auto">{children}</div>
  ) : (
    children
  )

  return (
    <section
      id={id}
      ref={ref}
      className={`${base} ${widthClass} ${className}`}
      {...props}
    >
      {content}
    </section>
  )
}
