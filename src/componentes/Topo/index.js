import './estilo.css';

export default function Topo(){
    return(
        <header>
            <div className="limitar-secao">
                <img src="assets/logo.png"/>
                <nav>
                    <a href="#produtos">Produtos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    )
}