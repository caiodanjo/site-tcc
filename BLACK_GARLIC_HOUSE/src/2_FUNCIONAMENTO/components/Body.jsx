import videoScreen from "../images/Video - Copia.png"
import estufa from "../images/Estufa.png"
import alhos from "../images/Alhos.png"

import styles from "./Body.module.css"

function Body() {
  return (
    <main>
        <div className={styles.fundo}>
            <h1>Vídeo do Projeto:</h1>

            <figure className={styles.video}>
                <img src={videoScreen} />
            </figure>

                <h1>Informações Gerais</h1>

                        <div className={styles.preparo}>
                            <div>
                                <h2>Como preparar o alho?</h2>

                                <ul>
                                    <li>Tempo necessário para escurecer: 2 a 3 semanas;</li>
                                    <li>Temperatura: 60° a 77°C;</li>
                                    <li>Textura ideal: pegajosa;</li>
                                    <li>Gosto: adocicado.</li>
                                </ul>
                            </div>

                            <figure>
                                <img src={estufa} />
                            </figure>
                        </div>
                        
                        <div className={styles.cuidados}> 
                            <figure>
                                <img src={alhos} />
                            </figure>   

                            <div>  
                                <h2>Cuidados:</h2>

                                <ul>
                                    <li>Não há a adição de conservantes;</li>
                                    <li>Não lavar ou remover os bulbos;</li>
                                    <li>Umidade controlada.</li>
                                </ul>
                            </div>
                        </div>

            </div>
    </main>
  )
}

export default Body