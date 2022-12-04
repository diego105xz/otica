import './estilo.css';

export default function SecaoContato(){
    return(
        <section id="contato" className="secao-contato">
            <div className="limitar-secao">
                <h2>Fale Conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
                <div className="boxs">
                    <div className="box">
                        <h3>Contato</h3>
                        <div>
                            <img src="assets/local.png" alt='local'/>
                            <p>São Paulo, SP</p>
                        </div>
                        <div>
                            <img src="assets/telefone.png" alt='telefone'/>
                            <p>(11) 99999-9999</p>
                        </div>
                        <div>
                            <img src="assets/email.png" alt='email'/>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <h3>Nossas Redes Sociais</h3>
                        <div>
                            <img src="assets/fb.png" alt='face'/>
                            <p>/OticaVida</p>
                        </div>
                        <div>
                            <img src="assets/ig.png" alt='instagram'/>
                            <p>@oticavidasp</p>
                        </div>
                        <div>
                            <img src="assets/tt.png" alt='twiter'/>
                            <p>@oticavidasp</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}