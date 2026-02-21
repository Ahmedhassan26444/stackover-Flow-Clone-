import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import NewestQuestion from "./Components/NewestQuestion"
import Rightwidgets from "./Components/Rightwidgets"

function App() {
  return (
    <>
      <Header />

      <div className="flex">

        <Navbar />

        <div className="flex flex-1 px-8">

          <div className="flex-1">
            <NewestQuestion />
          </div>

          <Rightwidgets />

        </div>

      </div>
    </>
  )
}

export default App
