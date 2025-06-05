import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

    const toggleDropdown = (index: number) => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    };

    

  return (
    <header className="header">
      <h1 className='header-logo'>
      <Link to="/" className='logo-link'>
        <FaReact className='logo-icon'/>
        <span className='logo-text'>빌드테스트</span>
     </Link>
     </h1>
      <nav className="header-nav">
          <Link to="/menu1">Menu1<ChevronDown size={20} /></Link>

          <Link to="/menu2">Menu2<ChevronDown size={20} /></Link>

          <Link to="/menu3">Menu3<ChevronDown size={20} /></Link>

          <Link to="/menu4">Menu4<ChevronDown size={20} /></Link>
        </nav>
    </header>
  )
}

export default Header