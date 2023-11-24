import { Header } from "./sections/header"
import { Main } from "./sections/main"
import { AuthProvider } from "./provider/auth"
import { IdUserProvider } from "./provider/idUser"

function App() {

  return (
    <AuthProvider>
      <IdUserProvider>
        <Header/>
        <Main/>
      </IdUserProvider>
    </AuthProvider>
  )
}

export default App
