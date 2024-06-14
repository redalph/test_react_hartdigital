import React from 'react'
import useState from 'react'
import { NavLink } from 'react-router-dom'

export default function StickyHeader(){
    const [fix, setFix] = useState(false)

    function setFix_func() {
        if (window.scrollY >= 97) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFix_func)

    return(
        <header className={fix ? "sticky-header fixed" : "sticky-header"}>
            <div className="container">
                <div>
                <a href="/">
                    <img className="logo" src="logo.png" alt="Logo"></img>
                </a>
                </div>
                <div>
                <ul className="nav-menu">
                    <div className="first-group">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Главная</NavLink></li>           
                    <li><NavLink to="/cases" className={({ isActive }) => isActive ? 'active' : ''} end>Кейсы</NavLink></li>
                    <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} end>Услуги</NavLink></li>
                    </div>

                    <div  className="second-group">
                    <li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : ''} end>Контакты</NavLink></li>           
                    <li><NavLink to="/vacancies" className={({ isActive }) => isActive ? 'active' : ''} end>Вакансии</NavLink></li>
                    </div>
                </ul>
                </div>
            </div>
        </header>
    )
}