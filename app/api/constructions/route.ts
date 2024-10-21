import { NextResponse } from 'next/server'

const API_URL = process.env.API_URL || 'http://localhost:8080'

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/constructions`, {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_TOKEN
      }
    })
    if (!res.ok) throw new Error('Failed to fetch constructions')
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching constructions:', error)
    return NextResponse.json([
      { id: 1, date: '2024-10-21', description: 'テスト工事1', customerName: '顧客A', note: '備考1', registrationDate: '2024-10-20' },
      { id: 2, date: '2024-10-22', description: 'テスト工事2', customerName: '顧客B', note: '備考2', registrationDate: '2024-10-20' },
      { id: 3, date: '2024-10-23', description: 'テスト工事3', customerName: '顧客C', note: '備考3', registrationDate: '2024-10-20' },
    ])
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const res = await fetch(`${API_URL}/api/constructions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.API_TOKEN
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error('Failed to register construction')
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error registering construction:', error)
    return NextResponse.json({ error: 'Failed to register construction' }, { status: 500 })
  }
}