import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AdminSidebar } from './AdminSidebar'
import { Menu } from 'lucide-react'

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#071a2b] overflow-hidden font-['Inter',sans-serif]">
      {/* Sidebar */}
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar (mobile) */}
        <header className="lg:hidden flex items-center gap-4 px-4 py-3 bg-[#040f1a] border-b border-[#1a3a5c]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-[#b8c7d9] hover:text-white transition-colors"
          >
            <Menu size={22} />
          </button>
          <span className="text-white font-semibold text-sm">HinTran Admin</span>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
