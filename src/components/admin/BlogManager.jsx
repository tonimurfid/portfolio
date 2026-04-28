import { useData } from '../../context/DataContext'
import CrudTable from './CrudTable'

const FIELDS = [
  { key: 'title', label: 'Title' },
  { key: 'date', label: 'Date' },
  { key: 'slug', label: 'Slug' },
  { key: 'content', label: 'Content', type: 'textarea' },
  { key: 'tags', label: 'Tags (comma separated)' },
]

export default function BlogManager() {
  const { blogs } = useData()

  const handleAdd = (form) => {
    blogs.add({
      title: form.title,
      date: form.date,
      slug: form.slug,
      content: form.content || '',
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    })
  }

  const handleUpdate = (id, form) => {
    blogs.update(id, {
      title: form.title,
      date: form.date,
      slug: form.slug,
      content: form.content || '',
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    })
  }

  return (
    <CrudTable
      title="Blog Posts"
      items={blogs.list}
      fields={FIELDS}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onRemove={blogs.remove}
      onReset={blogs.reset}
    />
  )
}
