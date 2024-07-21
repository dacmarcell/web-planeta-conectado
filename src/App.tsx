import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostCardHoc from './hoc/PostCardHoc'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <PostCardHoc/>
    </QueryClientProvider>
  )
}

export default App
