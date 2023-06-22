import '../styles/header.css';
const Header = ()=>{
    return (
        <header className='header'>
            <nav className='navbar'>
                <h2 className='navbar-title'>shigeo webko</h2>
                <div className='navbar-items'>
                    <button className='navbar-item'>
                    Sign In
                    </button>
                    <button className='navbar-item'>
                    Sign Up
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;