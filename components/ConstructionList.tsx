'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material'
import { getConstructions } from '../app/actions/constructionActions'

type Construction = {
  id: number
  date: string
  description: string
  customerName: string
  note: string
}

const defaultConstructions: Construction[] = [
  { id: 1, date: '2024-10-21', description: 'テスト工事1', customerName: '顧客A', note: '備考1' },
  { id: 2, date: '2024-10-22', description: 'テスト工事2', customerName: '顧客B', note: '備考2' },
  { id: 3, date: '2024-10-23', description: 'テスト工事3', customerName: '顧客C', note: '備考3' },
]

export default function ConstructionList() {
  const [constructions, setConstructions] = useState<Construction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchConstructions = async () => {
      try {
        const data = await getConstructions()
        setConstructions(data.length > 0 ? data : defaultConstructions)
      } catch (error) {
        console.error('Error fetching constructions:', error)
        setConstructions(defaultConstructions)
      } finally {
        setLoading(false)
      }
    }

    fetchConstructions()
  }, [])

  if (loading) {
    return <CircularProgress />
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell>説明</TableCell>
            <TableCell>顧客名</TableCell>
            <TableCell>備考</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {constructions.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.customerName}</TableCell>
              <TableCell>{item.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
