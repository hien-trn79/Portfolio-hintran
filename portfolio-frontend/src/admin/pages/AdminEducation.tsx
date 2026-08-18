import { useEffect, useState } from 'react'
import { educationApi, type EducationData } from '../api/adminApi'
import { useToast } from '../components/Toast'
import { Save, Loader2, Plus, Trash2, Edit3, X, Check } from 'lucide-react'

function Field({
  label,
  name,
  value,
  onChange,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#b8c7d9] text-[13px] font-medium font-['Inter',sans-serif]">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#040f1a] border border-[#1a3a5c] rounded-xl px-4 py-3 text-white text-sm font-['Inter',sans-serif] outline-none focus:border-[#2196f3] transition-colors"
      />
    </div>
  )
}

const emptyEdu: Omit<EducationData, 'id'> = {
  university: '',
  universityVI: '',
  major: '',
  majorVI: '',
  currentGpa: '',
  maxGpa: '4.0',
  period: '',
  periodVI: '',
  isDeleted: false,
}

export function AdminEducation() {
  const [items, setItems] = useState<EducationData[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<EducationData | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [addForm, setAddForm] = useState({ ...emptyEdu })
  const [saving, setSaving] = useState(false)
  const { showToast, ToastComponent } = useToast()

  const load = () => {
    setLoading(true)
    educationApi
      .getAll()
      .then(setItems)
      .catch(() => showToast('Không thể tải dữ liệu', 'error'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const startEdit = (item: EducationData) => {
    setEditingId(item.id)
    setEditForm({ ...item })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(null)
  }

  const saveEdit = async () => {
    if (!editForm) return
    setSaving(true)
    try {
      await educationApi.update(editForm.id, editForm)
      showToast('✅ Đã cập nhật học vấn!')
      load()
      cancelEdit()
    } catch {
      showToast('❌ Cập nhật thất bại', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Xóa mục học vấn này?')) return
    try {
      await educationApi.delete(id)
      showToast('Đã xóa!')
      load()
    } catch {
      showToast('Xóa thất bại', 'error')
    }
  }

  const handleAdd = async () => {
    setSaving(true)
    try {
      await educationApi.create(addForm)
      showToast('✅ Đã thêm học vấn mới!')
      setShowAdd(false)
      setAddForm({ ...emptyEdu })
      load()
    } catch {
      showToast('❌ Thêm thất bại', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm((prev) => prev && { ...prev, [e.target.name]: e.target.value })
  }

  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 size={28} className="text-[#2196f3] animate-spin" />
      </div>
    )

  return (
    <div className="p-6 lg:p-10 max-w-3xl mx-auto">
      {ToastComponent}

      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[#2196f3] rounded-full" />
          <h1 className="text-white text-2xl font-bold font-['Inter',sans-serif]">Học vấn</h1>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] text-white font-semibold text-sm px-5 py-2.5 rounded-xl font-['Inter',sans-serif] transition-colors"
        >
          <Plus size={15} />
          Thêm mới
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-6"
          >
            {editingId === item.id && editForm ? (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Trường (EN)" name="university" value={editForm.university} onChange={handleEditChange} />
                  <Field label="Trường (VI)" name="universityVI" value={editForm.universityVI} onChange={handleEditChange} />
                  <Field label="Ngành (EN)" name="major" value={editForm.major} onChange={handleEditChange} />
                  <Field label="Ngành (VI)" name="majorVI" value={editForm.majorVI} onChange={handleEditChange} />
                  <Field label="GPA hiện tại" name="currentGpa" value={editForm.currentGpa} onChange={handleEditChange} />
                  <Field label="GPA tối đa" name="maxGpa" value={editForm.maxGpa} onChange={handleEditChange} />
                  <Field label="Thời gian (EN)" name="period" value={editForm.period} onChange={handleEditChange} />
                  <Field label="Thời gian (VI)" name="periodVI" value={editForm.periodVI} onChange={handleEditChange} />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={saveEdit}
                    disabled={saving}
                    className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                    Lưu
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="flex items-center gap-2 border border-[#1a3a5c] text-[#b8c7d9] hover:text-white text-sm px-4 py-2 rounded-xl transition-colors"
                  >
                    <X size={14} />
                    Hủy
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-lg font-['Inter',sans-serif]">
                    {item.university}
                  </p>
                  <p className="text-[#2196f3] text-sm font-semibold font-['Inter',sans-serif]">
                    {item.major}
                  </p>
                  <p className="text-[#b8c7d9] text-sm mt-1 font-['Inter',sans-serif]">
                    GPA: {item.currentGpa} / {item.maxGpa} &nbsp;·&nbsp; {item.period}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => startEdit(item)}
                    className="p-2 text-[#b8c7d9] hover:text-[#2196f3] hover:bg-[#0d1f35] rounded-lg transition-colors"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-[#b8c7d9] hover:text-red-400 hover:bg-[#2d0a0a] rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add form */}
        {showAdd && (
          <div className="bg-[#0d263d] border border-[#2196f3]/30 rounded-2xl p-6">
            <p className="text-[#90caf9] font-semibold text-sm mb-4 font-['Inter',sans-serif]">
              Thêm học vấn mới
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Field label="Trường (EN)" name="university" value={addForm.university} onChange={handleAddChange} />
              <Field label="Trường (VI)" name="universityVI" value={addForm.universityVI} onChange={handleAddChange} />
              <Field label="Ngành (EN)" name="major" value={addForm.major} onChange={handleAddChange} />
              <Field label="Ngành (VI)" name="majorVI" value={addForm.majorVI} onChange={handleAddChange} />
              <Field label="GPA hiện tại" name="currentGpa" value={addForm.currentGpa} onChange={handleAddChange} />
              <Field label="GPA tối đa" name="maxGpa" value={addForm.maxGpa} onChange={handleAddChange} />
              <Field label="Thời gian (EN)" name="period" value={addForm.period} onChange={handleAddChange} />
              <Field label="Thời gian (VI)" name="periodVI" value={addForm.periodVI} onChange={handleAddChange} />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                disabled={saving}
                className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                Lưu
              </button>
              <button
                onClick={() => setShowAdd(false)}
                className="flex items-center gap-2 border border-[#1a3a5c] text-[#b8c7d9] text-sm px-4 py-2 rounded-xl transition-colors"
              >
                <X size={14} />
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
