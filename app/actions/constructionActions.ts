'use server'

import { revalidatePath } from 'next/cache'

const API_URL = process.env.API_URL || 'http://localhost:8080'

export async function getConstructions() {
  try {
    const res = await fetch(`${API_URL}/api/constructions`, {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_TOKEN
      },
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch constructions')
    return await res.json()
  } catch (error) {
    console.error('Error fetching constructions:', error)
    return []
  }
}

export async function createConstruction(formData: FormData) {
  const data = Object.fromEntries(formData)
  try {
    const res = await fetch(`${API_URL}/api/constructions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.API_TOKEN
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to create construction')
    revalidatePath('/')
    return { success: true, message: '工事情報が正常に登録されました' }
  } catch (error) {
    console.error('Error creating construction:', error)
    return { success: false, message: '工事情報の登録に失敗しました' }
  }
}
