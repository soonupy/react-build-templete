import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
import { ChevronDown } from 'lucide-react';


const Header = () => {
  return (
    <header className="header">
      <h1 className='header-logo'>
      <Link to="/" className='logo-link'>
        <FaReact className='logo-icon'/>
        <span className='logo-text'>빌드테스트</span>
     </Link>
     </h1>
      <nav className="header-nav">
        <Link className="menu" to="/menu1">Menu1<ChevronDown size={20} /></Link>
        <Link className="menu" to="/menu2">Menu2</Link>
        <Link className="menu" to="/menu3">Menu3</Link>
        <Link className="menu" to="/menu4">Menu4</Link>
      </nav>
    </header>
  )
}

export default Header