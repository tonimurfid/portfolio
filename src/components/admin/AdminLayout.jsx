import { NavLink, Outlet } from 'react-router-dom'

const NAV = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/blogs', label: 'Blog Posts' },
  { to: '/admin/projects', label: 'Projects' },
  { to: '/admin/experiences', label: 'Experience' },
  { to: '/admin/competitions', label: 'Competitions' },
]

export default function AdminLayout() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
      isActive
        ? 'bg-purple/20 text-purple border border-purple/30'
        : 'text-comment hover:text-foreground hover:bg-surface/30'
    }`

  return (
    <div className="min-h-screen bg-[#1e1f29] flex">
      <aside className="w-56 bg-[#282a36] border-r border-[#44475a]/20 p-4 flex flex-col gap-1 flex-shrink-0">
        <div className="mb-6 mt-2">
          <a href="/" className="font-mono text-xs tracking-tight">
            <span className="text-purple">from</span>
            <span className="text-cyan ml-1">toni</span>
            <span className="text-purple ml-1">import</span>
            <span className="text-green ml-1">admin</span>
          </a>
        </div>
        {NAV.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className={linkClass}>
            {label}
          </NavLink>
        ))}
        <div className="mt-auto pt-4 border-t border-[#44475a]/20">
          <a href="/" className="block px-4 py-2 rounded-lg text-sm font-mono text-comment hover:text-cyan transition-colors">
            &larr; View Site
          </a>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
