'use client'

import Link from 'next/link'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          回線サービス
        </Typography>
        <Button color="inherit" component={Link} href="/">
          ホーム
        </Button>
        <Button color="inherit" component={Link} href="/users">
          ユーザー
        </Button>
      </Toolbar>
    </AppBar>
  )
}

