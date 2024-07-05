import MuiPage from "./screens/MuiPage"
import TailwindPage from "./screens/TailwindPage"
import { NavLink } from "react-router-dom"


function App() {

  return (
    <>
      <div className="w-full h-screen bg-[#1E1E1E] flex justify-center items-center">
        <div className="w-[60%] h-[60%] bg-[#262626] flex justify-around items-center md:flex-row flex-col rounded-xl shadow-2xl">
          <NavLink to={'/mui'} className="md:w-[25%] w-[50%]">
            <figure>
              <img className="w-full" src="./icons8-material-ui.svg" alt="" />
            </figure>
          </NavLink>
          <NavLink to={'/tailwindcss'} className="md:w-[25%] w-[50%]">
            <figure>
              <img className="w-full" src="./icons8-tailwindcss.svg" alt="" />
            </figure>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default App
