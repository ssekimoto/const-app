import { NextResponse } from 'next/server'

const API_URL = process.env.API_URL || 'http://localhost:8080'

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/users`, {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_TOKEN
      }
    })
    if (!res.ok) throw new Error('Failed to fetch users')
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json([
      { id: 1, username: 'admin', role: 'ROLE_ADMIN', email: 'admin@example.com' },
      { id: 2, username: 'user1', role: 'ROLE_USER', email: 'user1@example.com' },
      { id: 3, username: 'user2', role: 'ROLE_USER', email: 'user2@example.com' },
    ])
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const res = await fetch(`${API_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error('Failed to register user')
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error registering user:', error)
    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 })
  }
}