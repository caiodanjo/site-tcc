import img1 from "../images/image1_mobile.jpg"
import img2 from "../images/image2.png"

import styles from "./Body.module.css"

function Body() {
  return (
    <main>
        <div className={styles.fundo}>
            <figure className={styles.mobile_image}>
                <h1>Objetivo & Público</h1>
            </figure>

            <div className={styles.objetivo}>
                <h1>Objetivo</h1>
                <p>Nosso projeto consiste em criar uma estufa inteligente, utilizando Arduíno e outros componentes, para produção de alho negro, permitindo o fácil acesso à esse ingrediente e, até mesmo, a produção de dinheiro através do produto final.</p>
            </div>

            <div className={styles.publico}>
                <h1>Para quem é nosso projeto?</h1>
                <p>Ele foi pensado para pessoas com interesses em produzir seu próprio alho negro em casa e em pequena quantidade.</p>
            </div>

            <figure className={styles.mulherRegando}>
                <img src={img2} />
            </figure>
        </div>
    </main>
  )
}

export default Body