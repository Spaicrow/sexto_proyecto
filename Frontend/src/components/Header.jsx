import {link} from "react-router-dom";
import logo from "../assets/logo.svg"
const Header = () => {
  return (
   <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
    <div className="px-4 flexBetwnn py-3 max-xs:px-2">
        {/* logo*/}
        <div>
           <link><img src={logo} alt="" height={66} width={66}/></link> 
        </div>
        <Navbar />
        <div>Buttons</div>
    </div>
   </header>
  )
}

export default Header
