import UserList from '@/components/UserList'
import UserForm from '@/components/UserForm'
import { Typography, Container, Box } from '@mui/material'

export default function Users() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ユーザー管理
        </Typography>
        <UserForm />
        <UserList />
      </Box>
    </Container>
  )
}
