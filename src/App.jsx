import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import NewestQuestion from "./Components/NewestQuestion"
import Rightwidgets from "./Components/Rightwidgets"
import Footer from "./Components/Footer"
import MainContent from "./Components/MainContent"

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        <div className="flex flex-1 px-8">
          <div className="flex-1">
            <NewestQuestion />
            <MainContent /> 
          </div>
          <Rightwidgets />  
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
