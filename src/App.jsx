
import { AppWrapper } from "./App.style"
import { HistoryProvider } from "./context/HistoryProvider"
import Header from "./components/Header"
import PrincipalDashboard from "./components/PrincipalDashboard"
import Footer from "./components/Footer"

import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

    return (
      <BrowserRouter>
        <AppWrapper>
          <HistoryProvider>

            <Header />

            <Routes>
              <Route path = "/" element = {<PrincipalDashboard />}/>
              <Route path = "/history" element = {<div>Historial</div>} />
              <Route path = "/quotation" element = {<div>Cotizacion</div>} />
            </Routes>

            <Footer />

          </HistoryProvider>
        </AppWrapper>
      </BrowserRouter>
    )
}

export default App
