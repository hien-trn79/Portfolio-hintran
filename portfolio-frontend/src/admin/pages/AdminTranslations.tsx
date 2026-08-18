import { useEffect, useState } from 'react'
import { translationsApi, type TranslationsData } from '../api/adminApi'
import { useToast } from '../components/Toast'
import { Save, Loader2, ChevronDown, ChevronUp } from 'lucide-react'

type Lang = 'en' | 'vi'

const SECTION_LABELS: Record<string, string> = {
  nav: 'Navbar',
  hero: 'Hero Section',
  about: 'About Section',
  education: 'Học vấn',
  skills: 'Kỹ năng',
  projects: 'Projects',
  contact: 'Contact',
  footer: 'Footer',
}

function TextareaField({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  const isLong = value.length > 100
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#b8c7d9] text-[12px] font-medium font-['Inter',sans-serif] capitalize">
        {label}
      </label>
      {isLong ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full bg-[#040f1a] border border-[#1a3a5c] rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-[#2196f3] transition-colors resize-vertical font-['Inter',sans-serif]"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#040f1a] border border-[#1a3a5c] rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-[#2196f3] transition-colors font-['Inter',sans-serif]"
        />
      )}
    </div>
  )
}

export function AdminTranslations() {
  const [data, setData] = useState<TranslationsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<Lang>('en')
  const [expandedSection, setExpandedSection] = useState<string | null>('hero')
  const { showToast, ToastComponent } = useToast()

  useEffect(() => {
    translationsApi
      .get()
      .then(setData)
      .catch(() => showToast('Không thể tải dữ liệu', 'error'))
      .finally(() => setLoading(false))
  }, [])

  const handleChange = (section: string, key: string, value: string) => {
    setData((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          [section]: {
            ...prev[activeTab][section],
            [key]: value,
          },
        },
      }
    })
  }

  const handleSave = async () => {
    if (!data) return
    setSaving(true)
    try {
      await translationsApi.update(data)
      showToast('✅ Đã lưu nội dung văn bản!')
    } catch {
      showToast('❌ Lưu thất bại', 'error')
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

  const langData = data[activeTab]
  const sections = Object.keys(langData).filter((k) => typeof langData[k] === 'object')

  return (
    <div className="p-6 lg:p-10 max-w-3xl mx-auto">
      {ToastComponent}

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[#2196f3] rounded-full" />
          <h1 className="text-white text-2xl font-bold font-['Inter',sans-serif]">
            Nội dung văn bản
          </h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#2196f3] hover:bg-[#1976d2] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors font-['Inter',sans-serif]"
        >
          {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
          {saving ? 'Đang lưu...' : 'Lưu tất cả'}
        </button>
      </div>

      {/* Language tabs */}
      <div className="flex gap-2 mb-6">
        {(['en', 'vi'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setActiveTab(l)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold font-['Inter',sans-serif] transition-colors ${
              activeTab === l
                ? 'bg-[#2196f3] text-white'
                : 'bg-[#0d263d] text-[#b8c7d9] border border-[#1a3a5c] hover:text-white'
            }`}
          >
            {l === 'en' ? '🇬🇧 English' : '🇻🇳 Tiếng Việt'}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-3">
        {sections.map((section) => {
          const sectionData = langData[section]
          const isExpanded = expandedSection === section
          const keys = Object.keys(sectionData).filter((k) => typeof sectionData[k] === 'string')

          return (
            <div key={section} className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white font-semibold text-sm font-['Inter',sans-serif]">
                  {SECTION_LABELS[section] || section}
                </span>
                <div className="flex items-center gap-2 text-[#b8c7d9]">
                  <span className="text-[12px]">{keys.length} trường</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 flex flex-col gap-4 border-t border-[#1a3a5c] pt-4">
                  {keys.map((key) => (
                    <TextareaField
                      key={key}
                      label={key}
                      value={sectionData[key] as string}
                      onChange={(v) => handleChange(section, key, v)}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
