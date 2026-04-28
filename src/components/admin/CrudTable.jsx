import { useState } from 'react'

export default function CrudTable({ title, items, fields, onAdd, onUpdate, onRemove, onReset }) {
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({})

  const startEdit = (item) => {
    setEditing(item?.id || 'new')
    setForm(item || Object.fromEntries(fields.map((f) => [f.key, ''])))
  }

  const cancelEdit = () => {
    setEditing(null)
    setForm({})
  }

  const handleSave = () => {
    if (editing === 'new') {
      onAdd(form)
    } else {
      onUpdate(editing, form)
    }
    cancelEdit()
  }

  const updateField = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const handleArrayField = (key, value) => {
    updateField(key, value.split('\n').filter(Boolean))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-mono text-xl font-bold text-cyan">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="px-3 py-1.5 rounded-lg text-xs font-mono border border-red/40 text-red hover:bg-red/10 transition-colors"
          >
            Reset Defaults
          </button>
          <button
            onClick={() => startEdit(null)}
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-purple text-[#282a36] font-bold
              hover:shadow-[0_0_12px_rgba(189,147,249,0.3)] transition-all"
          >
            + Add New
          </button>
        </div>
      </div>

      {editing && (
        <div className="bg-surface/40 border border-purple/30 rounded-xl p-5 mb-6">
          <h3 className="font-mono text-sm text-purple mb-4">
            {editing === 'new' ? 'New Entry' : 'Edit Entry'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((f) => {
              if (f.type === 'textarea') {
                return (
                  <div key={f.key} className="md:col-span-2">
                    <label className="block text-xs font-mono text-comment mb-1">{f.label}</label>
                    <textarea
                      value={Array.isArray(form[f.key]) ? form[f.key].join('\n') : (form[f.key] || '')}
                      onChange={(e) => handleArrayField(f.key, e.target.value)}
                      rows={4}
                      className="w-full bg-[#282a36] border border-[#44475a] rounded-lg px-3 py-2 text-sm
                        text-foreground outline-none focus:border-purple transition-all font-mono resize-none"
                    />
                  </div>
                )
              }
              return (
                <div key={f.key}>
                  <label className="block text-xs font-mono text-comment mb-1">{f.label}</label>
                  <input
                    type="text"
                    value={form[f.key] || ''}
                    onChange={(e) => updateField(f.key, e.target.value)}
                    className="w-full bg-[#282a36] border border-[#44475a] rounded-lg px-3 py-2 text-sm
                      text-foreground outline-none focus:border-purple transition-all font-mono"
                  />
                </div>
              )
            })}
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-green text-[#282a36] hover:shadow-[0_0_12px_rgba(80,250,123,0.3)] transition-all"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="px-4 py-2 rounded-lg text-xs font-mono border border-[#44475a] text-comment hover:text-foreground transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {items.length === 0 && (
          <p className="text-comment text-sm font-mono text-center py-8">No entries yet. Click "Add New" to create one.</p>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-surface/30 border border-[#44475a]/20 rounded-lg p-4 flex items-start justify-between gap-4
              hover:border-purple/20 transition-colors group"
          >
            <div className="flex-1 min-w-0">
              <h4 className="font-mono font-bold text-foreground text-sm">{item.title || item.name || item.company || item.competition}</h4>
              <p className="text-comment text-xs mt-0.5 line-clamp-2">
                {item.role || item.date || item.org || item.desc || ''}
              </p>
              {(item.tags || item.highlights) && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {(item.tags || []).map((t, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-purple/10 text-purple/80 border border-purple/20">
                      {t}
                    </span>
                  ))}
                  {(item.highlights || []).slice(0, 2).map((h, i) => (
                    <span key={i} className="text-[10px] text-comment/70 font-mono">• {h}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <button
                onClick={() => startEdit(item)}
                className="px-2 py-1 rounded text-[10px] font-mono text-cyan border border-cyan/30 hover:bg-cyan/10 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => { if (confirm('Delete this entry?')) onRemove(item.id) }}
                className="px-2 py-1 rounded text-[10px] font-mono text-red border border-red/30 hover:bg-red/10 transition-colors"
              >
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
