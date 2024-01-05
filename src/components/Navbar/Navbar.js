
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.scss'

export const Navbar = () => {
    return(
        <>
            <header>
                <nav>
                    <div className='container navbar'>
                        <div className='logo'>GAB Dev.</div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}