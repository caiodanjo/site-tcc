import logo from "../images/Logo.png"

import { CaretDown, CaretUp } from "@phosphor-icons/react"

import styles from "./Header.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false)

  function handleAbrirFecharMenu(){
    if(abrirMenu === true){
        setAbrirMenu(false)
        return
    }

    setAbrirMenu(true)
  }

  return (
    <header>
        <div className={styles.mobile}>
            <div className={styles.header}>
                <Link to="/">
                    <img src={logo} />
                </Link>

                <h1>Black Garlic House</h1>
                <button onClick={handleAbrirFecharMenu}>
                    {
                        abrirMenu === true ? (
                            <CaretUp size={32} />
                        ) : (
                            <CaretDown size={32} />
                        )
                    }
                </button>
            </div>

            <div className={`${styles.menu} ${abrirMenu === true && styles.open}`}>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/funcionamento">Funcionamento</Link>
                    <Link to="/equipamentos">Equipamentos & custos</Link>
                    <Link to="/diferencial">Diferencial</Link>
                    <Link to="/bibliografia">Bibliografia</Link>
                </nav>
            </div>
        </div> 

        <div className={styles.desktop}>
                <Link to="/">
                    <img src={logo} />
                </Link>

                <h1>Black Garlic House</h1>

            <nav className={styles.desktop_options}>
                <Link to="/funcionamento">Funcionamento</Link>
                <Link to="/equipamentos">Equipamentos & custos</Link>
                <Link to="/diferencial">Diferencial</Link>
                <Link to="/bibliografia">Bibliografia</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header