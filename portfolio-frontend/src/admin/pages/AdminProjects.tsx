import { useEffect, useState } from 'react'
import { projectsApi, type ProjectData, type ProjectContentLocalized } from '../api/adminApi'
import { useToast } from '../components/Toast'
import {
  ImagePlus,
  Plus,
  Trash2,
  Edit3,
  X,
  Save,
  Loader2,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'

// ─── Blank template ──────────────────────────────────────────────────────────
const blankContent = (): ProjectContentLocalized => ({
  title: '',
  role: '',
  desc: '',
  status: '',
  team: '',
  period: '',
  overview: '',
  features: [''],
  responsibilities: [''],
  challenges: [{ problem: '', solution: '' }],
})

const blankProject = (): Omit<ProjectData, 'id'> => ({
  img: '',
  github: '',
  tags: [],
  isFeatured: true,
  content: { en: blankContent(), vi: blankContent() },
})

// ─── Small helpers ────────────────────────────────────────────────────────────
function InputField({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  multiline?: boolean
}) {
  const cls =
    "w-full bg-[#040f1a] border border-[#1a3a5c] rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-[#2196f3] transition-colors font-['Inter',sans-serif] resize-none"
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#b8c7d9] text-[12px] font-medium font-['Inter',sans-serif]">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={cls}
        />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className={cls} />
      )}
    </div>
  )
}

function ListField({
  label,
  items,
  onChange,
}: {
  label: string
  items: string[]
  onChange: (items: string[]) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#b8c7d9] text-[12px] font-medium font-['Inter',sans-serif]">
        {label}
      </label>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input
            value={item}
            onChange={(e) => onChange(items.map((v, idx) => (idx === i ? e.target.value : v)))}
            className="flex-1 bg-[#040f1a] border border-[#1a3a5c] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[#2196f3] transition-colors"
          />
          <button
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            className="text-red-400 p-1"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <button
        onClick={() => onChange([...items, ''])}
        className="text-[#2196f3] text-sm flex items-center gap-1 hover:text-white transition-colors font-['Inter',sans-serif]"
      >
        <Plus size={14} /> Thêm dòng
      </button>
    </div>
  )
}

// ─── Project form (for add/edit) ──────────────────────────────────────────────
function ProjectForm({
  data,
  onChange,
  onSave,
  onCancel,
  saving,
}: {
  data: Omit<ProjectData, 'id'>
  onChange: (d: Omit<ProjectData, 'id'>) => void
  onSave: () => void
  onCancel: () => void
  saving: boolean
}) {
  const [tab, setTab] = useState<'en' | 'vi'>('en')

  const setContent = (lang: 'en' | 'vi', field: keyof ProjectContentLocalized, value: unknown) => {
    onChange({
      ...data,
      content: { ...data.content, [lang]: { ...data.content[lang], [field]: value } },
    })
  }

  const content = data.content[tab]

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      alert('Ảnh bìa quá lớn. Vui lòng chọn ảnh nhỏ hơn 5MB.')
      e.target.value = ''
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') onChange({ ...data, img: reader.result })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Common fields */}
      <div className="flex flex-col gap-3">
        <label className="text-[#b8c7d9] text-[12px] font-medium font-['Inter',sans-serif]">
          Ảnh bìa project
        </label>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="w-full sm:w-56 aspect-video overflow-hidden rounded-xl border border-[#1a3a5c] bg-[#040f1a]">
            {data.img ? (
              <img src={data.img} alt="Ảnh bìa project" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-[#4a6580]">
                <ImagePlus size={24} />
                <span className="text-xs">Chưa có ảnh bìa</span>
              </div>
            )}
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#2196f3] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1976d2] font-['Inter',sans-serif]">
            <ImagePlus size={16} />
            Chọn ảnh bìa
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleCoverChange}
              className="sr-only"
            />
          </label>
        </div>
        <p className="text-xs leading-5 text-[#7890a8] font-['Inter',sans-serif]">
          PNG, JPG hoặc WEBP, tối đa 5MB. Tỷ lệ ngang 16:9 sẽ hiển thị đẹp nhất.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="GitHub URL"
          value={data.github}
          onChange={(v) => onChange({ ...data, github: v })}
        />
        <InputField
          label="Tags (phẩy phân cách)"
          value={data.tags.join(', ')}
          onChange={(v) =>
            onChange({
              ...data,
              tags: v
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean),
            })
          }
        />
      </div>
      <label className="flex items-center gap-2 text-[#b8c7d9] text-sm font-['Inter',sans-serif]">
        <input
          type="checkbox"
          checked={data.isFeatured}
          onChange={(e) => onChange({ ...data, isFeatured: e.target.checked })}
          className="accent-[#2196f3]"
        />
        Dự án nổi bật (Featured)
      </label>

      {/* Language tabs */}
      <div className="flex gap-2">
        {(['en', 'vi'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setTab(l)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold font-['Inter',sans-serif] transition-colors ${tab === l ? 'bg-[#2196f3] text-white' : 'bg-[#040f1a] text-[#b8c7d9] border border-[#1a3a5c]'}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Tiêu đề"
          value={content.title}
          onChange={(v) => setContent(tab, 'title', v)}
        />
        <InputField
          label="Vai trò"
          value={content.role}
          onChange={(v) => setContent(tab, 'role', v)}
        />
        <InputField
          label="Mô tả ngắn"
          value={content.desc}
          onChange={(v) => setContent(tab, 'desc', v)}
        />
        <InputField
          label="Trạng thái"
          value={content.status}
          onChange={(v) => setContent(tab, 'status', v)}
        />
        <InputField
          label="Team"
          value={content.team}
          onChange={(v) => setContent(tab, 'team', v)}
        />
        <InputField
          label="Thời gian"
          value={content.period}
          onChange={(v) => setContent(tab, 'period', v)}
        />
      </div>
      <InputField
        label="Tổng quan"
        value={content.overview}
        onChange={(v) => setContent(tab, 'overview', v)}
        multiline
      />
      <ListField
        label="Tính năng nổi bật"
        items={content.features}
        onChange={(v) => setContent(tab, 'features', v)}
      />
      <ListField
        label="Trách nhiệm"
        items={content.responsibilities}
        onChange={(v) => setContent(tab, 'responsibilities', v)}
      />

      {/* Challenges */}
      <div className="flex flex-col gap-3">
        <label className="text-[#b8c7d9] text-[12px] font-medium font-['Inter',sans-serif]">
          Thách thức & Giải pháp
        </label>
        {content.challenges.map((ch, i) => (
          <div
            key={i}
            className="bg-[#040f1a] rounded-xl p-4 flex flex-col gap-3 border border-[#1a3a5c]"
          >
            <InputField
              label={`Vấn đề ${i + 1}`}
              value={ch.problem}
              onChange={(v) => {
                const chs = content.challenges.map((c, idx) =>
                  idx === i ? { ...c, problem: v } : c
                )
                setContent(tab, 'challenges', chs)
              }}
            />
            <InputField
              label={`Giải pháp ${i + 1}`}
              value={ch.solution}
              onChange={(v) => {
                const chs = content.challenges.map((c, idx) =>
                  idx === i ? { ...c, solution: v } : c
                )
                setContent(tab, 'challenges', chs)
              }}
              multiline
            />
            <button
              onClick={() =>
                setContent(
                  tab,
                  'challenges',
                  content.challenges.filter((_, idx) => idx !== i)
                )
              }
              className="text-red-400 text-sm flex items-center gap-1"
            >
              <X size={13} /> Xóa
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setContent(tab, 'challenges', [...content.challenges, { problem: '', solution: '' }])
          }
          className="text-[#2196f3] text-sm flex items-center gap-1 hover:text-white transition-colors"
        >
          <Plus size={14} /> Thêm thách thức
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
        >
          {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          Lưu
        </button>
        <button
          onClick={onCancel}
          className="flex items-center gap-2 border border-[#1a3a5c] text-[#b8c7d9] text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          <X size={14} /> Hủy
        </button>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export function AdminProjects() {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Omit<ProjectData, 'id'> | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [addForm, setAddForm] = useState<Omit<ProjectData, 'id'>>(blankProject())
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [reorderingId, setReorderingId] = useState<number | null>(null)
  const { showToast, ToastComponent } = useToast()

  const load = () => {
    setLoading(true)
    projectsApi
      .getAll()
      .then(setProjects)
      .catch(() => showToast('Không thể tải dữ liệu', 'error'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const startEdit = (p: ProjectData) => {
    setEditingId(p.id)
    setEditForm({
      img: p.img || '',
      github: p.github,
      tags: p.tags,
      isFeatured: p.isFeatured,
      content: p.content,
    })
    setExpandedId(p.id)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(null)
  }

  const saveEdit = async () => {
    if (!editForm || editingId === null) return
    setSaving(true)
    try {
      await projectsApi.update(editingId, editForm)
      showToast('✅ Đã cập nhật dự án!')
      load()
      cancelEdit()
    } catch {
      showToast('❌ Cập nhật thất bại', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Xóa dự án này?')) return
    try {
      await projectsApi.delete(id)
      showToast('Đã xóa!')
      load()
    } catch {
      showToast('Xóa thất bại', 'error')
    }
  }

  const handleAdd = async () => {
    setSaving(true)
    try {
      await projectsApi.create(addForm)
      showToast('✅ Đã thêm dự án!')
      setShowAdd(false)
      setAddForm(blankProject())
      load()
    } catch {
      showToast('❌ Thêm thất bại', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleMove = async (index: number, direction: -1 | 1) => {
    const targetIndex = index + direction
    if (targetIndex < 0 || targetIndex >= projects.length || reorderingId !== null) return

    const previousProjects = projects
    const reordered = [...projects]
    const [movedProject] = reordered.splice(index, 1)
    reordered.splice(targetIndex, 0, movedProject)

    setProjects(reordered)
    setReorderingId(movedProject.id)
    try {
      await projectsApi.reorder(reordered.map((project) => project.id))
      showToast('✅ Đã cập nhật thứ tự dự án!')
    } catch {
      setProjects(previousProjects)
      showToast('❌ Không thể cập nhật thứ tự', 'error')
    } finally {
      setReorderingId(null)
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
          <h1 className="text-white text-2xl font-bold font-['Inter',sans-serif]">Dự án</h1>
        </div>
        <button
          onClick={() => {
            setShowAdd(true)
            setExpandedId(-1)
          }}
          className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors font-['Inter',sans-serif]"
        >
          <Plus size={15} /> Thêm dự án
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {/* Add form */}
        {showAdd && (
          <div className="bg-[#0d263d] border border-[#2196f3]/30 rounded-2xl p-6">
            <p className="text-[#90caf9] font-semibold text-sm mb-5 font-['Inter',sans-serif]">
              Dự án mới
            </p>
            <ProjectForm
              data={addForm}
              onChange={setAddForm}
              onSave={handleAdd}
              onCancel={() => setShowAdd(false)}
              saving={saving}
            />
          </div>
        )}

        {projects.map((p, index) => {
          const isExpanded = expandedId === p.id
          const isEditing = editingId === p.id
          const isReordering = reorderingId === p.id
          return (
            <div
              key={p.id}
              className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl overflow-hidden"
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between p-5 cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : p.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[#7890a8] text-xs font-semibold min-w-5">
                      {index + 1}
                    </span>
                    <p className="text-white font-bold text-base font-['Inter',sans-serif] truncate">
                      {p.content.en.title}
                    </p>
                  </div>
                  <p className="text-[#2196f3] text-sm font-['Inter',sans-serif]">
                    {p.content.en.role}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-3">
                  {p.isFeatured && (
                    <span className="text-[10px] text-[#2196f3] border border-[#2196f3]/40 px-2 py-0.5 rounded-full font-['Inter',sans-serif]">
                      Featured
                    </span>
                  )}
                  <button
                    type="button"
                    disabled={index === 0 || reorderingId !== null}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleMove(index, -1)
                    }}
                    title="Đưa dự án lên"
                    aria-label={`Đưa ${p.content.en.title} lên một vị trí`}
                    className="p-2 text-[#b8c7d9] hover:text-[#2196f3] disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    <ArrowUp size={15} />
                  </button>
                  <button
                    type="button"
                    disabled={index === projects.length - 1 || reorderingId !== null}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleMove(index, 1)
                    }}
                    title="Đưa dự án xuống"
                    aria-label={`Đưa ${p.content.en.title} xuống một vị trí`}
                    className="p-2 text-[#b8c7d9] hover:text-[#2196f3] disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    <ArrowDown size={15} />
                  </button>
                  {isReordering && <Loader2 size={15} className="text-[#2196f3] animate-spin" />}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      startEdit(p)
                    }}
                    className="p-2 text-[#b8c7d9] hover:text-[#2196f3] rounded-lg transition-colors"
                  >
                    <Edit3 size={15} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(p.id)
                    }}
                    className="p-2 text-[#b8c7d9] hover:text-red-400 rounded-lg transition-colors"
                  >
                    <Trash2 size={15} />
                  </button>
                  {isExpanded ? (
                    <ChevronUp size={16} className="text-[#b8c7d9]" />
                  ) : (
                    <ChevronDown size={16} className="text-[#b8c7d9]" />
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {isExpanded && (
                <div className="border-t border-[#1a3a5c] p-5">
                  {isEditing && editForm ? (
                    <ProjectForm
                      data={editForm}
                      onChange={setEditForm}
                      onSave={saveEdit}
                      onCancel={cancelEdit}
                      saving={saving}
                    />
                  ) : (
                    <div className="flex flex-col gap-2 text-sm text-[#b8c7d9] font-['Inter',sans-serif]">
                      <p>
                        <span className="text-white font-semibold">GitHub:</span> {p.github}
                      </p>
                      <p>
                        <span className="text-white font-semibold">Tags:</span> {p.tags.join(', ')}
                      </p>
                      <p>
                        <span className="text-white font-semibold">Team:</span> {p.content.en.team}{' '}
                        · {p.content.en.period}
                      </p>
                      <p className="mt-1">{p.content.en.desc}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
