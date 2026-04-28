import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Section({ id, className = '', children, ...props }) {
  const [ref, visible] = useScrollReveal()
  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-4 md:px-8 max-w-6xl mx-auto transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
