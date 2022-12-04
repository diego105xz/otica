import './estilo.css';

export default function SecaoSobre(){
    return(
        <section id="sobre" className="secao-sobre">
            <div className="limitar-secao">
                <h2>Quem somos nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada ao atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="box-card">
                    <div className="cards">
                        <img src="assets/loja.png"/>
                    </div>
                    <div className="cards">
                        <h3>Nossas filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="cards">
                        <h3>Atendimento flexivel</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div className="cards">
                        <img src="assets/atendimento.png"/>
                    </div>
                </div>
            </div>
        </section>
    )
}