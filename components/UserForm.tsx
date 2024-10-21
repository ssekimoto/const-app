'use client'

import { useState } from 'react'
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Snackbar } from '@mui/material'
import { createUser } from '../app/actions/userActions'

export default function UserForm() {
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })

  const handleSubmit = async (formData: FormData) => {
    const result = await createUser(formData)
    setSnackbar({ open: true, message: result.message })
  }

  return (
    <form action={handleSubmit} style={{ marginTop: '16px' }}>
      <TextField
        fullWidth
        label="ユーザー名"
        name="username"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="メールアドレス"
        type="email"
        name="email"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="パスワード"
        type="password"
        name="password"
        margin="normal"
        required
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>役割</InputLabel>
        <Select
          name="role"
          defaultValue="ROLE_USER"
          label="役割"
        >
          <MenuItem value="ROLE_USER">ユーザー</MenuItem>
          <MenuItem value="ROLE_ADMIN">管理者</MenuItem>
        </Select>
      </FormControl>
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

