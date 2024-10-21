'use server'

import { revalidatePath } from 'next/cache'

const API_URL = process.env.API_URL || 'http://localhost:8080'

export async function getUsers() {
  try {
    const res = await fetch(`${API_URL}/api/users`, {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_TOKEN
      },
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch users')
    return await res.json()
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}

export async function createUser(formData: FormData) {
  const data = Object.fromEntries(formData)
  try {
    const res = await fetch(`${API_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to create user')
    revalidatePath('/users')
    return { success: true, message: 'ユーザーが正常に登録されました' }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, message: 'ユーザーの登録に失敗しました' }
  }
}
