import modelo from "../images/modelo3d.png"
import caixa from "../images/Captura de tela 2023-11-06 065504.png"

import styles from "./Body.module.css"

function Body() {
  return (
    <main>
        <div className={styles.fundo}>
            <h1>Nosso Diferencial</h1>

            <p>Criamos a Black Garlic House para a produção mais eficaz e compacta, juntando uma estufa inteligente a uma estufa comum de alho negro.</p>
            <p>As estufas tradicionais para alho negro são maiores que o necessário, ocupando espaço e energia por mais tempo.</p>
            <p>O alho negro é pouco conhecido por muitos, sendo utilizado para culinária sofisticada devido ao sabor pouco adocicado. Seu custo médio por quilo é aproximadamente R$250,00.</p>
            <p>Nosso projeto tem o intuito de tornar o alho negro em um ingrediente acessível para pessoas com uma renda menor, podendo produzir de forma caseira.</p>
            <p>Nossa proposta é trazer inteligência para essa produção, agilizando, modernizando e deixando com uma estética incrivel!</p>

            <h1>Nosso Projeto</h1>
            <figure className={styles.projetoImg}>
                <img src={caixa} />
            </figure>
        </div>
    </main>
  )
}

export default Body