import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"
import { ConfigProvider } from "./context/ConfigContext"

function App() {

  return (
    <BrowserRouter>
      <ConfigProvider>
          <RoutesApp />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
