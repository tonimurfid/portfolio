import { useData } from '../../context/DataContext'
import CrudTable from './CrudTable'

const FIELDS = [
  { key: 'name', label: 'Project Name' },
  { key: 'desc', label: 'Description', type: 'textarea' },
  { key: 'link', label: 'Link URL' },
  { key: 'tags', label: 'Tech Tags (comma separated)' },
]

export default function ProjectManager() {
  const { projects } = useData()

  const handleAdd = (form) => {
    projects.add({
      name: form.name,
      desc: form.desc || '',
      link: form.link || '#',
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    })
  }

  const handleUpdate = (id, form) => {
    projects.update(id, {
      name: form.name,
      desc: form.desc || '',
      link: form.link || '#',
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    })
  }

  return (
    <CrudTable
      title="Projects"
      items={projects.list}
      fields={FIELDS}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onRemove={projects.remove}
      onReset={projects.reset}
    />
  )
}
