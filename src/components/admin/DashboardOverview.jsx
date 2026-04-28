import { NavLink, Outlet } from 'react-router-dom'
import { useData } from '../../context/DataContext'

export default function DashboardOverview() {
  const { blogs, projects, experiences, competitions } = useData()

  const stats = [
    { label: 'Blog Posts', count: blogs.list.length, to: '/admin/blogs', color: 'text-cyan' },
    { label: 'Projects', count: projects.list.length, to: '/admin/projects', color: 'text-green' },
    { label: 'Experience', count: experiences.list.length, to: '/admin/experiences', color: 'text-purple' },
    { label: 'Competitions', count: competitions.list.length, to: '/admin/competitions', color: 'text-yellow' },
  ]

  return (
    <div>
      <h2 className="font-mono text-xl font-bold text-foreground mb-2">Dashboard Overview</h2>
      <p className="text-comment text-sm font-mono mb-8">Manage your portfolio content. Changes save automatically to browser storage.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, count, to, color }) => (
          <NavLink
            key={to}
            to={to}
            className="bg-surface/30 border border-[#44475a]/20 rounded-xl p-5
              hover:border-purple/30 hover:shadow-[0_4px_20px_rgba(189,147,249,0.1)]
              transition-all duration-300 group"
          >
            <div className={`text-3xl font-bold font-mono ${color} mb-1`}>{count}</div>
            <div className="text-comment text-xs font-mono group-hover:text-foreground transition-colors">{label}</div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
