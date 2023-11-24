import { Header } from "./sections/header"
import { AuthProvider } from "./provider/auth"

function App() {

  return (
    <AuthProvider>
      <Header/>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </AuthProvider>
  )
}

export default App
