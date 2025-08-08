import { NextRequest, NextResponse } from 'next/server'
import { portfolioData } from '@/lib/portfolio-data'

export async function GET() {
  return NextResponse.json(portfolioData)
}

export async function PUT(request: NextRequest) {
  const authCookie = request.cookies.get('admin-auth')
  
  if (authCookie?.value !== 'authenticated') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    // In a real application, you would save this to a database
    // For now, we'll just return success
    
    return NextResponse.json({ message: 'Portfolio updated successfully' })
  } catch {
    return NextResponse.json(
      { message: 'Failed to update portfolio' },
      { status: 500 }
    )
  }
}