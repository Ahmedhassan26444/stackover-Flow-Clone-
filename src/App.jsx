import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import NewestQuestion from "./Components/NewestQuestion"
import Rightwidgets from "./Components/Rightwidgets"
import Footer from "./Components/Footer"
import MainContent from "./Components/MainContent"
import Homecontent from "./Components/Homecontent"
import { useState } from "react"

function App() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Header/>

      <div className="flex">
        <Navbar onHomeClick={() => setShowPopup(true)} />

        <div className="flex flex-1 px-8">
          <div className="flex-1">
            <NewestQuestion />
            <MainContent />
          </div>
          <Rightwidgets />
        </div>
      </div>

      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Homecontent onClose={() => setShowPopup(false)} />
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default App