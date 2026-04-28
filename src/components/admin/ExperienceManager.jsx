import { useData } from '../../context/DataContext'
import CrudTable from './CrudTable'

const FIELDS = [
  { key: 'company', label: 'Company' },
  { key: 'role', label: 'Role' },
  { key: 'date', label: 'Date Range' },
  { key: 'location', label: 'Location' },
  { key: 'highlights', label: 'Highlights (one per line)', type: 'textarea' },
]

export default function ExperienceManager() {
  const { experiences } = useData()

  const handleAdd = (form) => {
    experiences.add({
      company: form.company,
      role: form.role,
      date: form.date,
      location: form.location,
      highlights: form.highlights || [],
    })
  }

  const handleUpdate = (id, form) => {
    experiences.update(id, {
      company: form.company,
      role: form.role,
      date: form.date,
      location: form.location,
      highlights: form.highlights || [],
    })
  }

  return (
    <CrudTable
      title="Experience"
      items={experiences.list}
      fields={FIELDS}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onRemove={experiences.remove}
      onReset={experiences.reset}
    />
  )
}
