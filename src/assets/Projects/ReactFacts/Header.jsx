import ReactSVG  from '/src/assets/react.svg';

 function Header(){
    return(
       <header>
        <nav className="nav">
            <div className="logo">
                <img src={ReactSVG} alt="" />
                <span>ReactFacts</span>
            </div>
            <div className='course'>
                React Course - Project 1
            </div>
        </nav>
       </header>
    )
}

export default Header;