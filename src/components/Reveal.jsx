import { useScrollReveal } from '../hooks/useScrollReveal'

// ponytail: thin wrapper, reuses existing IntersectionObserver hook + CSS keyframes
export default function Reveal({ children, className = '', direction = 'fade-up', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useScrollReveal(0.1)
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? `visible ${direction}` : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
