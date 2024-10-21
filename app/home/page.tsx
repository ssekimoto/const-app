import ConstructionList from '@/components/ConstructionList'
import ConstructionForm from '@/components/ConstructionForm'
import { Typography, Container, Box } from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          工事情報管理
        </Typography>
        <ConstructionForm />
        <ConstructionList />
      </Box>
    </Container>
  )
}