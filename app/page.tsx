'use client'

import { useState } from 'react'
import { AppBar, Toolbar, Typography, Container, Box, Tab, Tabs } from '@mui/material'
import ConstructionList from '@/components/ConstructionList'
import ConstructionForm from '@/components/ConstructionForm'
import UserForm from '@/components/UserForm'
import UserList from '@/components/UserList'

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0078D4' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            回線サービス（仮）
          </Typography>
          <Tabs value={currentTab} onChange={handleTabChange} textColor="inherit">
            <Tab label="ホーム" />
            <Tab label="ユーザー" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {currentTab === 0 ? (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              回線工事情報管理
            </Typography>
            <ConstructionForm />
            <ConstructionList />
          </>
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              ユーザー管理
            </Typography>
            <UserForm />
            <UserList />
          </>
        )}
      </Container>
    </Box>
  )
}