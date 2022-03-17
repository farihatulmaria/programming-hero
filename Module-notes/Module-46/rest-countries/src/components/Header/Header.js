import './Header.css';

const Header = () => {
    return (
        <header>
          <nav>
              
              <div className='logo'>
                    LOGO
              </div>

              <ul className='main-menu'>
                 <li>
                     <a href="#">Home</a>
                 </li>
                 <li>
                     <a href="#">About</a>
                 </li>
                 <li>
                     <a href="#">Product</a>
                 </li>
                 <li>
                     <a href="#">Contact</a>
                 </li>
              </ul>
              
          </nav>
        </header>
    );
};

export default Header;