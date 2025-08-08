'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Mail, 
  LogOut, 
  Menu, 
  X,
  Save,
  Eye
} from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: User, label: 'About', href: '/dashboard/about' },
  { icon: Briefcase, label: 'Projects', href: '/dashboard/projects' },
  { icon: Mail, label: 'Contact', href: '/dashboard/contact' },
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      toast.success('Logged out successfully')
      router.push('/authadmin')
    } catch (error) {
      toast.error('Logout failed')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 to-primary-900">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 transform transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-8">Portfolio CMS</h2>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-accent-orange/20 text-accent-orange rounded-lg hover:bg-accent-orange/30 transition-colors text-sm"
          >
            <Eye className="w-4 h-4" />
            View Site
          </Link>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-neutral-400 hover:text-error-400 hover:bg-error-500/10 rounded-lg transition-colors text-sm w-full"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}