import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

const ADMIN_EMAIL = 'abdulbosit.melikuziev@gmail.com'
const ADMIN_PASSWORD_HASH = '$2a$12$LQv3c1yqBwEHFl5aysHdsOHiUiVlHznpvOmjjvQBXNvRE6jBdHvyS' // abtv_uk@portfolio.site

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const isValidPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH)
    
    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const response = NextResponse.json(
      { message: 'Login successful' },
      { status: 200 }
    )

    // Set HTTP-only cookie for authentication
    response.cookies.set('admin-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}