import arduino from "../images/Arduino.png"
import sensor from "../images/791_1_H.png"
import lcd from "../images/Display LCD.png"
import rele from "../images/relé.png"
import jumpers from "../images/fios.png"
import protoboard from "../images/protoboard.png"
import led from "../images/leds.png"
import custo from "../images/custos.png"

import styles from "./Body.module.css"

function Body() {
  return (
    <main>
        <div className={styles.fundo}>
            <h1>Equipamentos</h1>

            <div className={styles.equipamentos}>

                <figure>
                    <img src={arduino} />

                    <div className={styles.preco}>
                        <h2>Preço Médio:</h2>
                        <p>R$109,90</p>
                    </div>
                </figure>

                <div className={styles.text}>
                    <div>
                        <h1>O que é?</h1>
                        <p>O Arduíno Uno é uma placa de microcontrolador de código aberto baseada no microcontrolador Microchip ATmega328P e desenvolvida pela Arduino.cc e lançada inicialmente em 2010.</p>
                    </div>
                    <div>
                        <h1>O que faz?</h1>
                        <p>O Arduíno serve para facilitar o aprendizado de programação, ensinando as pessoas a desenvolverem projetos de eletrônica e de robótica, automatizar escritório, criar um novo brinquedo ou jogos, etc.</p>                        
                    </div>
                </div>

                <figure>
                    <img src={sensor} />
                    
                    <div className={styles.preco}>
                        <h2>Preço Médio:</h2>
                        <p>R$13,90</p>
                    </div>
                </figure>

                <div className={styles.text}>
                    <div>
                        <h1>O que é?</h1>
                        <p>Sensores de temperatura são dispositivos de medições que detectam a temperatura a partir de uma característica física correspondente dos equipamentos, como, por exemplo, uma resistência elétrica</p>
                    </div>
                    <div>
                        <h1>O que faz?</h1>
                        <p>O Sensor de Temperatura DS18B20 é um sensor digital que realiza medições na faixa de -55° a 125°C, em ambiente seco, úmido ou submerso, não necessitando de um componente externo para isso, além de apresentar os valores em graus celsius.</p>
                    </div>
                </div>

                <figure>
                    <img src={lcd} />
                    
                    
                    <div className={styles.preco}>
                        <h2>Preço Médio:</h2>
                        <p>R$34,39</p>
                    </div>
                </figure>

                <div className={styles.text}>
                    <div>
                        <h1>O que é?</h1>
                        <p>Um display de cristal líquido, acrônimo de LCD.</p>
                    </div>
                    <div>
                        <h1>O que faz?</h1>
                        <p>É um painel fino usado para exibir informações por via eletrônica.</p>
                    </div>
                </div>

                <figure>
                    <img src={rele} />
                    
                    <div className={styles.preco}>
                        <h2>Preço Médio:</h2>
                        <p>R$7,90</p>
                    </div>
                </figure>

                <div className={styles.text}>
                    <div>
                        <h1>O que é?</h1>
                        <p>Um relé, ou, menos frequentemente, relê, é um interruptor eletromecânico projetado por Michael Faraday na década de 1830, com inúmeras aplicações possíveis em comutação de contatos elétricos</p>
                    </div>
                    <div>
                        <h1>O que faz?</h1>
                        <p>Os relés basicamente são dispositivos elétricos que tem como função produzir modificações súbitas, porém predeterminadas em um ou mais circuitos elétricos</p>
                    </div>
                </div>

                <figure>
                    <img src={jumpers} />
                    
                    <div className={styles.preco}>
                        <h2>Preço Médio:</h2>
                        <p>R$8,90</p>
                    </div>
                </figure>
                <div className={styles.text}>
                    <div>
                        <h1>O que é?</h1>
                        <p>São fios resistentes com entradas especiais que funcionam em conjunto com o Arduíno.</p>
                    </div>
                    <div>
                        <h1>O que faz?</h1>
                        <p>Possuem como finalidade a conexão entre a placa Arduíno e outros componentes.</p>
                    </div>
                </div>

                <figure>
                    <img src={protoboard} />
                    
                    <div className={styles.preco}>
                        <h2>Preço Médio:</h2>
                        <p>R$12,90</p>
                    </div>
                </figure>
                
                <div className={styles.text}>
                    <div>
                        <h1>O que é?</h1>
                        <p>Protoboard ou matriz de contato é uma placa com diversos furos e conexões condutoras verticais e horizontais para a montagem de circuitos elétricos experimentais. Seu uso tem a vantagem de dispensar a soldagem.</p>
                    </div>
                    <div>
                        <h1>O que faz?</h1>
                        <p>A protoboard é uma ferramenta muito útil para os profissionais da área de utilização porque possibilita conectar diversos componentes, como capacitores, resistores, circuitos integrados, diodos, transistores, entre outros, permitindo uma precisão maior na montagem de circuitos</p>
                    </div>
                </div>

                <figure>
                    <img src={led} />
                    
                    <div className={styles.preco}>
                        <h2>Preço Médio:</h2>
                        <p>R$0,20</p>
                    </div>
                </figure>
                <div className={styles.text}>
                    <div>
                        <h1>O que é?</h1>
                        <p>O LED é um componente bipolar, possui dois terminais chamados de ânodo e catodo, os quais determinam ou não a polarização do LED, ou seja, a forma a qual está polarizado determina a passagem ou não de corrente elétrica, esta ocasionando a ocorrência de luz.</p>
                    </div>
                    <div>
                        <h1>O que faz?</h1>
                        <p>Ele emite luz quando é energizado a partir de uma certa tensão e a corrente que passa por ele determina a intensidade dessa luz. A corrente máxima de cada porta do Arduíno é baixa, então não tem muito risco de queimar um LED.</p>
                    </div>
                </div>
            </div>
            
            <h1>Custo</h1>

            <div className={styles.custo}>
                <div>
                    <p>Custo total: R$346,16</p>
                </div>

                <figure>
                    <img src={custo} />
                </figure>
                
            </div>
        </div>
    </main>
  )
}

export default Body