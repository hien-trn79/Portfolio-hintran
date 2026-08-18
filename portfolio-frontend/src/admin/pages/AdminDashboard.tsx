import { useEffect, useState } from 'react'
import { FolderOpen, Wrench, GraduationCap, User, ExternalLink } from 'lucide-react'
import { projectsApi } from '../api/adminApi'
import { skillsApi } from '../api/adminApi'
import { educationApi } from '../api/adminApi'
import { meApi } from '../api/adminApi'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: number | string
  color: string
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  return (
    <div className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-6 flex items-center gap-5">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${color}20` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div>
        <p className="text-[#b8c7d9] text-sm font-['Inter',sans-serif]">{label}</p>
        <p className="text-white text-2xl font-bold font-['Inter',sans-serif]">{value}</p>
      </div>
    </div>
  )
}

export function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    skillCategories: 0,
    education: 0,
    name: '...',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      projectsApi.getAll(),
      skillsApi.getAll(),
      educationApi.getAll(),
      meApi.get(),
    ])
      .then(([projects, skills, edu, me]) => {
        setStats({
          projects: projects.length,
          skillCategories: skills.length,
          education: edu.length,
          name: me.fullName,
        })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const cards = [
    { icon: <User size={22} />, label: 'Tên hiển thị', value: stats.name, color: '#2196f3' },
    { icon: <FolderOpen size={22} />, label: 'Dự án', value: stats.projects, color: '#10b981' },
    { icon: <Wrench size={22} />, label: 'Nhóm kỹ năng', value: stats.skillCategories, color: '#f59e0b' },
    { icon: <GraduationCap size={22} />, label: 'Học vấn', value: stats.education, color: '#8b5cf6' },
  ]

  const quickLinks = [
    { href: '/admin/me', label: 'Chỉnh sửa thông tin cá nhân →' },
    { href: '/admin/projects', label: 'Quản lý dự án →' },
    { href: '/admin/skills', label: 'Cập nhật kỹ năng →' },
    { href: '/admin/education', label: 'Cập nhật học vấn →' },
    { href: '/admin/translations', label: 'Chỉnh sửa nội dung text →' },
  ]

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-[#2196f3] rounded-full" />
          <h1 className="text-white text-2xl font-bold font-['Inter',sans-serif]">
            Dashboard
          </h1>
        </div>
        <p className="text-[#b8c7d9] text-sm font-['Inter',sans-serif] pl-4">
          Chào mừng đến trang quản trị Portfolio. Chỉnh sửa mọi thứ từ đây.
        </p>
      </div>

      {/* Stats */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-6 h-24 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((c) => (
            <StatCard key={c.label} {...c} />
          ))}
        </div>
      )}

      {/* Quick actions */}
      <div className="bg-[#0d263d] border border-[#1a3a5c] rounded-2xl p-6">
        <h2 className="text-white font-semibold text-base mb-5 font-['Inter',sans-serif] flex items-center gap-2">
          <ExternalLink size={16} className="text-[#2196f3]" />
          Truy cập nhanh
        </h2>
        <div className="flex flex-col gap-3">
          {quickLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#b8c7d9] hover:text-[#2196f3] text-sm font-['Inter',sans-serif] transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2196f3] opacity-60 group-hover:opacity-100 transition-opacity" />
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 bg-[rgba(33,150,243,0.08)] border border-[#2196f3]/20 rounded-2xl p-5">
        <p className="text-[#90caf9] text-sm font-['Inter',sans-serif]">
          💡 <strong>Lưu ý:</strong> Đảm bảo Admin Backend (Node.js) đang chạy tại{' '}
          <code className="bg-[#0d263d] px-2 py-0.5 rounded text-xs">http://localhost:3001</code>.
          Portfolio frontend sẽ tự động cập nhật dữ liệu mới sau khi bạn lưu.
        </p>
      </div>
    </div>
  )
}
