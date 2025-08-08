'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import DashboardLayout from '@/components/DashboardLayout'
import ContentEditor from '@/components/ContentEditor'
import { portfolioData } from '@/lib/portfolio-data'
import type { PortfolioData } from '@/types/portfolio'

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<PortfolioData>(portfolioData)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check')
        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          router.push('/authadmin')
        }
      } catch {
        router.push('/authadmin')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-950 to-primary-900">
        <div className="w-8 h-8 border-2 border-accent-orange/30 border-t-accent-orange rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <DashboardLayout>
      <ContentEditor data={data} setData={setData} />
    </DashboardLayout>
  )
}