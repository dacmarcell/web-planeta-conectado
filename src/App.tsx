import './App.css'
import PostCardHoc from './hoc/PostCardHoc'

const main: React.CSSProperties = {
  width: '100vw',
  height: '100vh'
}

function App() {
  return (
    <main style={main}>
      <PostCardHoc/>
    </main>
  )
}

export default App
