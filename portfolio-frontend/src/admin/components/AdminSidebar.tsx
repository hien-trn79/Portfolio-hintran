import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  User,
  FolderOpen,
  Wrench,
  GraduationCap,
  Languages,
  X,
} from 'lucide-react'

interface AdminSidebarProps {
  open: boolean
  onClose: () => void
}

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/me', label: 'Thông tin cá nhân', icon: User },
  { to: '/admin/projects', label: 'Dự án', icon: FolderOpen },
  { to: '/admin/skills', label: 'Kỹ năng', icon: Wrench },
  { to: '/admin/education', label: 'Học vấn', icon: GraduationCap },
  { to: '/admin/translations', label: 'Nội dung văn bản', icon: Languages },
]

export function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  return (
    <>
      {/* Overlay on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#040f1a] border-r border-[#1a3a5c] z-30
          flex flex-col transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a3a5c]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2196f3] flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm font-['Inter',sans-serif]">HinTran</p>
              <p className="text-[#2196f3] text-[11px] font-['Inter',sans-serif]">Admin Panel</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-[#b8c7d9] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium font-['Inter',sans-serif] transition-all ${
                  isActive
                    ? 'bg-[#2196f3] text-white shadow-lg shadow-[#2196f3]/20'
                    : 'text-[#b8c7d9] hover:bg-[#0d263d] hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#1a3a5c]">
          <a
            href="/"
            className="flex items-center gap-2 text-[#b8c7d9] hover:text-[#2196f3] text-sm font-['Inter',sans-serif] transition-colors"
          >
            <span>←</span>
            <span>Xem Portfolio</span>
          </a>
        </div>
      </aside>
    </>
  )
}
