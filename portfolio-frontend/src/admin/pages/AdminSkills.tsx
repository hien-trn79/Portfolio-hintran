import { useEffect, useState } from 'react'
import { skillsApi, type SkillCategory } from '../api/adminApi'
import { useToast } from '../components/Toast'
import { Save, Loader2, Plus, Trash2, X } from 'lucide-react'

export function AdminSkills() {
  const [categories, setCategories] = useState<SkillCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [newCatName, setNewCatName] = useState('')
  const [showAddCat, setShowAddCat] = useState(false)
  const { showToast, ToastComponent } = useToast()

  const load = () => {
    setLoading(true)
    skillsApi
      .getAll()
      .then(setCategories)
      .catch(() => showToast('Không thể tải dữ liệu', 'error'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const saveAll = async () => {
    setSaving(true)
    try {
      await skillsApi.updateAll(categories)
      showToast('✅ Đã lưu tất cả kỹ năng!')
    } catch {
      showToast('❌ Lưu thất bại', 'error')
    } finally {
      setSaving(false)
    }
  }

  const updateCatName = (id: number, name: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, category: name } : c))
    )
  }

  const addSkill = (id: number, skill: string) => {
    if (!skill.trim()) return
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, skills: [...c.skills, skill.trim()] } : c
      )
    )
  }

  const removeSkill = (catId: number, skillIdx: number) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === catId
          ? { ...c, skills: c.skills.filter((_, i) => i !== skillIdx) }
          : c
      )
    )
  }

  const updateSkill = (catId: number, skillIdx: number, value: string) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === catId
          ? { ...c, skills: c.skills.map((s, i) => (i === skillIdx ? value : s)) }
          : c
      )
    )
  }

  const deleteCategory = async (id: number) => {
    if (!confirm('Xóa nhóm kỹ năng này?')) return
    try {
      await skillsApi.delete(id)
      showToast('Đã xóa nhóm!')
      load()
    } catch {
      showToast('Xóa thất bại', 'error')
    }
  }

  const addCategory = async () => {
    if (!newCatName.trim()) return
    try {
      await skillsApi.create({ category: newCatName.trim(), skills: [] })
      showToast('✅ Đã thêm nhóm!')
      setNewCatName('')
      setShowAddCat(false)
      load()
    } catch {
      showToast('❌ Thêm thất bại', 'error')
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 size={28} className="text-[#2196f3] animate-spin" />
      </div>
    )

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto">
      {ToastComponent}

      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[#2196f3] rounded-full" />
          <h1 className="text-white text-2xl font-bold font-['Inter',sans-serif]">Kỹ năng</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAddCat(true)}
            className="flex items-center gap-2 border border-[#1a3a5c] hover:border-[#2196f3] text-[#b8c7d9] hover:text-[#2196f3] font-semibold text-sm px-4 py-2.5 rounded-xl font-['Inter',sans-serif] transition-colors"
          >
            <Plus size={15} />
            Thêm nhóm
          </button>
          <button
            onClick={saveAll}
            disabled={saving}
            className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl font-['Inter',sans-serif] transition-colors"
          >
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            {saving ? 'Đang lưu...' : 'Lưu tất cả'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-5">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <input
                value={cat.category}
                onChange={(e) => updateCatName(cat.id, e.target.value)}
                className="flex-1 bg-transparent border-b border-[#1a3a5c] focus:border-[#2196f3] text-[#90caf9] font-bold text-sm uppercase tracking-wider outline-none pb-1 font-['Inter',sans-serif] transition-colors"
              />
              <button
                onClick={() => deleteCategory(cat.id)}
                className="p-1.5 text-[#b8c7d9] hover:text-red-400 rounded-lg transition-colors"
                title="Xóa nhóm"
              >
                <Trash2 size={15} />
              </button>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {cat.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 bg-[#0d1f35] border border-[#1a3a5c] rounded-lg px-3 py-1"
                >
                  <input
                    value={skill}
                    onChange={(e) => updateSkill(cat.id, idx, e.target.value)}
                    className="bg-transparent text-white text-sm outline-none font-['Inter',sans-serif] w-auto min-w-0"
                    style={{ width: `${Math.max(skill.length * 8, 60)}px` }}
                  />
                  <button
                    onClick={() => removeSkill(cat.id, idx)}
                    className="text-[#4a6580] hover:text-red-400 ml-1 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>

            {/* Add skill inline */}
            <AddSkillInput onAdd={(skill) => addSkill(cat.id, skill)} />
          </div>
        ))}

        {/* Add category card */}
        {showAddCat && (
          <div className="bg-[#0d263d] border border-[#2196f3]/30 rounded-2xl p-5 flex flex-col gap-3">
            <p className="text-[#90caf9] text-sm font-semibold font-['Inter',sans-serif]">
              Tên nhóm kỹ năng mới
            </p>
            <input
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addCategory()}
              placeholder="VD: Mobile, DevOps..."
              className="bg-[#040f1a] border border-[#1a3a5c] rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-[#2196f3] transition-colors font-['Inter',sans-serif]"
            />
            <div className="flex gap-2">
              <button
                onClick={addCategory}
                className="bg-[#2196f3] hover:bg-[#1976d2] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                Thêm
              </button>
              <button
                onClick={() => { setShowAddCat(false); setNewCatName('') }}
                className="border border-[#1a3a5c] text-[#b8c7d9] text-sm px-4 py-2 rounded-xl transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AddSkillInput({ onAdd }: { onAdd: (s: string) => void }) {
  const [val, setVal] = useState('')
  return (
    <div className="flex gap-2 mt-1">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && val.trim()) {
            onAdd(val.trim())
            setVal('')
          }
        }}
        placeholder="+ Thêm kỹ năng (Enter)"
        className="flex-1 bg-[#040f1a] border border-dashed border-[#1a3a5c] hover:border-[#2196f3] rounded-lg px-3 py-1.5 text-[#b8c7d9] text-sm outline-none focus:border-[#2196f3] transition-colors placeholder-[#4a6580] font-['Inter',sans-serif]"
      />
      <button
        onClick={() => { if (val.trim()) { onAdd(val.trim()); setVal('') } }}
        className="text-[#2196f3] hover:text-white px-2 transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
