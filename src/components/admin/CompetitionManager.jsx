import { useData } from '../../context/DataContext'
import CrudTable from './CrudTable'

const FIELDS = [
  { key: 'rank', label: 'Rank (e.g. 🥇 1st Place)' },
  { key: 'competition', label: 'Competition Name' },
  { key: 'startDate', label: 'Date', type: 'month' },
  { key: 'date', label: 'Display Year (e.g. 2025)' },
  { key: 'org', label: 'Organizer' },
  { key: 'role', label: 'Role' },
  { key: 'color', label: 'Color class (e.g. text-yellow border-yellow/40 bg-yellow/10)' },
]

export default function CompetitionManager() {
  const { competitions } = useData()

  const handleAdd = (form) => {
    competitions.add({
      rank: form.rank,
      competition: form.competition,
      startDate: form.startDate || '',
      date: form.date || '',
      org: form.org,
      role: form.role,
      color: form.color || 'text-purple border-purple/40 bg-purple/10',
    })
  }

  const handleUpdate = (id, form) => {
    competitions.update(id, {
      rank: form.rank,
      competition: form.competition,
      startDate: form.startDate || '',
      date: form.date || '',
      org: form.org,
      role: form.role,
      color: form.color || 'text-purple border-purple/40 bg-purple/10',
    })
  }

  return (
    <CrudTable
      title="Competitions"
      items={competitions.list}
      fields={FIELDS}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onRemove={competitions.remove}
      onReset={competitions.reset}
      formatSubtitle={(item) => `${item.org} · ${item.date}`}
    />
  )
}
