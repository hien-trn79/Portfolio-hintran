import { useEffect, useState } from 'react'
import { meApi, type MeData } from '../api/adminApi'
import { useToast } from '../components/Toast'
import { Save, Loader2 } from 'lucide-react'

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  multiline = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  multiline?: boolean
}) {
  const cls =
    'w-full bg-[#040f1a] border border-[#1a3a5c] rounded-xl px-4 py-3 text-white text-sm font-["Inter",sans-serif] outline-none focus:border-[#2196f3] transition-colors placeholder-[#4a6580] resize-none'

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#b8c7d9] text-[13px] font-medium font-['Inter',sans-serif]">
        {label}
      </label>
      {multiline ? (
        <textarea name={name} value={value} onChange={onChange} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} className={cls} />
      )}
    </div>
  )
}

export function AdminMe() {
  const [data, setData] = useState<MeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const { showToast, ToastComponent } = useToast()

  useEffect(() => {
    meApi
      .get()
      .then(setData)
      .catch(() => showToast('Không thể tải dữ liệu. Kiểm tra backend đang chạy.', 'error'))
      .finally(() => setLoading(false))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prev) => prev && { ...prev, [e.target.name]: e.target.value })
  }

  const handleSave = async () => {
    if (!data) return
    setSaving(true)
    try {
      await meApi.update(data)
      showToast('✅ Đã lưu thông tin cá nhân thành công!')
    } catch {
      showToast('❌ Lưu thất bại. Vui lòng thử lại.', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 size={28} className="text-[#2196f3] animate-spin" />
      </div>
    )

  if (!data) return null

  return (
    <div className="p-6 lg:p-10 max-w-3xl mx-auto">
      {ToastComponent}

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[#2196f3] rounded-full" />
          <h1 className="text-white text-2xl font-bold font-['Inter',sans-serif]">
            Thông tin cá nhân
          </h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl font-['Inter',sans-serif] transition-colors"
        >
          {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
          {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {/* Basic info */}
        <div className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-6">
          <h2 className="text-[#90caf9] text-sm font-semibold uppercase tracking-wide mb-5 font-['Inter',sans-serif]">
            Thông tin cơ bản
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Họ và tên" name="fullName" value={data.fullName} onChange={handleChange} />
            <Field label="Ngày sinh" name="birthDate" value={data.birthDate} onChange={handleChange} />
            <Field label="Giới tính" name="gender" value={data.gender} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={data.email} onChange={handleChange} />
            <Field label="Số điện thoại" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} />
            <Field label="Địa chỉ" name="address" value={data.address} onChange={handleChange} />
            <Field label="LinkedIn URL" name="linkedin" value={data.linkedin} onChange={handleChange} />
            <Field label="GitHub URL" name="github" value={data.github} onChange={handleChange} />
          </div>
        </div>

        {/* Position */}
        <div className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-6">
          <h2 className="text-[#90caf9] text-sm font-semibold uppercase tracking-wide mb-5 font-['Inter',sans-serif]">
            Chức danh & Mô tả phụ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Vị trí (EN)" name="position" value={data.position} onChange={handleChange} />
            <Field label="Vị trí (VI)" name="positionVI" value={data.positionVI} onChange={handleChange} />
            <Field label="Subtitle (EN)" name="subtitle" value={data.subtitle} onChange={handleChange} />
            <Field label="Subtitle (VI)" name="subtitleVI" value={data.subtitleVI} onChange={handleChange} />
          </div>
        </div>

        {/* Bio */}
        <div className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-6">
          <h2 className="text-[#90caf9] text-sm font-semibold uppercase tracking-wide mb-5 font-['Inter',sans-serif]">
            Mô tả / Bio
          </h2>
          <div className="flex flex-col gap-4">
            <Field label="Bio (English)" name="bio" value={data.bio} onChange={handleChange} multiline />
            <Field label="Bio (Tiếng Việt)" name="bioVI" value={data.bioVI} onChange={handleChange} multiline />
          </div>
        </div>
      </div>
    </div>
  )
}
