import { useEffect, useState } from "react"
import Navbar from "./scenes/navbar/index.js"
import { SelectedPage } from "@/shared/types.js";
import Home from "./scenes/home/index.js";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses/index.js";
import ContactUs from "./scenes/ContactUs/index.js";
import Footer from "./scenes/footer/index.js";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer />
   </div>
    </>
  )
}

export default App
