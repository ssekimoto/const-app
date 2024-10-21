'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material'
import { getUsers } from '../app/actions/userActions'

type User = {
  id: number
  username: string
  role: string
}

const defaultUsers: User[] = [
  { id: 1, username: 'admin', role: 'ROLE_ADMIN' },
  { id: 2, username: 'user1', role: 'ROLE_USER' },
  { id: 3, username: 'user2', role: 'ROLE_USER' },
]

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers()
        setUsers(data.length > 0 ? data : defaultUsers)
      } catch (error) {
        console.error('Error fetching users:', error)
        setUsers(defaultUsers)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <CircularProgress />
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ユーザー名</TableCell>
            <TableCell>役割</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
