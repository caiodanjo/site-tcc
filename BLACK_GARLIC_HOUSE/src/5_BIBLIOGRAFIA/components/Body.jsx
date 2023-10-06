import styles from "./Body.module.css"

function Body() {
  return (
    <main>
        <div className={styles.fundo}>
            <h1>Referências Bibliográficas</h1>
            <p>Artigos e outras referências que utilizamos de referência para a construção do projeto:</p>

            <div className={styles.links}>
              <h2>Sites</h2>

              <ul>
                <li>Cozinha técnica - Alho negro: <a href="https://www.cozinhatecnica.com/2019/01/alho-negro/" target="_blank">Saiba mais!</a></li>
                <li>Hirota Food - Alho negro e suas propriedades: <a href="https://hirota.com.br/alho-negro/" target="_blank">Saiba mais!</a></li>
                <li>Usina Info - Termostato Arduíno com sensor: <a href="https://www.usinainfo.com.br/blog/termostato-arduino-com-sensor-de-temperatura-ds18b20-e-rele/" target="_blank">Saiba mais!</a></li>
                <li>Usina Info - Sensor de temperatura: <a href="https://www.usinainfo.com.br/blog/modulo-8-digitos-com-display-7-segmentos-e-sensor-de-temperatura-a-prova-d-agua/" target="_blank">Saiba mais!</a></li>
                <li>Blogspot - Fazendo Alho Negro: <a href="http://fazendoalhonegro.blogspot.com/2016/03/como-fazer-estufa-caseira-para-produzir.html" target="_blank">Saiba mais!</a></li>
              </ul>

              <h2>Artigos</h2>
              <ul>
                <li>Sistema Automatizado de Controle de Estufas para Cultivo de Hortaliças: <a href="https://repositorio.ufsm.br/bitstream/handle/1/12958/TCCG_SIFW_2017_FERNANDES_DOUGLAS.pdf?sequence=1&isAllowed=y" target="_blank">Saiba mais!</a></li>
                <li>Desenvolvimento e Caracterização de Patês de Alho Negro: <a href="https://www2.ifrn.edu.br/ojs/index.php/HOLOS/article/view/10669/pdf" target="_blank">Saiba mais!</a></li>
                <li>Estufa Inteligente: <a href="https://sol.sbc.org.br/index.php/erbase/article/view/8534/8435" target="_blank">Saiba mais!</a></li>
              </ul>
            </div>
        </div>
    </main>
  )
}

export default Body