import { NavLink } from "react-router-dom"
import {MdHomeFilled, MdCategory, MdContacts, MdShop2} from "react-icons/md"

const Navbar = () => {
  return (
    <div>
      <nav className={`${containerStyles}`}>
      <NavLink> to={'/'} <div className="flexCenter gap-x-1 "><MdHomeFilled />home</div></NavLink>
      <NavLink> to={'/mens'}<div className="flexCenter gap-x-1 "><MdCategory />Men's</div></NavLink>
      <NavLink> to={'/womens'}<div className="flexCenter gap-x-1 "><MdShop2 />Women's</div></NavLink>
      <NavLink> to={'/kids'}<div className="flexCenter gap-x-1 "><MdContacts />Kid's</div></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
