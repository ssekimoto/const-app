'use client'

import { useState } from 'react'
import { TextField, Button, Snackbar } from '@mui/material'
import { createConstruction } from '../app/actions/constructionActions'

export default function ConstructionForm() {
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })

  const handleSubmit = async (formData: FormData) => {
    const result = await createConstruction(formData)
    setSnackbar({ open: true, message: result.message })
  }

  return (
    <form action={handleSubmit} style={{ marginTop: '16px' }}>
      <TextField
        fullWidth
        label="日付"
        type="date"
        name="date"
        InputLabelProps={{ shrink: true }}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="説明"
        name="description"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="顧客名"
        name="customerName"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="備考"
        name="note"
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
        登録
      </Button>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </form>
  )
}
