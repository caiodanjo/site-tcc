import videoScreen from "../images/Video - Copia.png"
import estufa from "../images/Estufa.png"
import alhos from "../images/Alhos.png"

import styles from "./Body.module.css"

function Body() {
  return (
    <main>
        <div className={styles.fundo}>
            <h1>Vídeo do Projeto:</h1>

            <div className={styles.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LY5WlaMYcp8?si=PG5R_TLsoEN1nbL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className={styles.funcionamento}>
                <h1>Funcionamento</h1>
                <p>Uma lâmpada incandescente foi utilizada para aquecer o alho. Ela ficará ligada até que a temperatura dentro da caixa, lida pelo sensor DHT11, alcance 75ºC. Quando isso acontecer, a lâmpada será desligada automáticamente, voltando a ligar apenas quando a temperatura abaixar. Além disso, do lado exterior há uma tela LCD que mostra quantos graus está dentro da caixa.</p>
            </div>


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