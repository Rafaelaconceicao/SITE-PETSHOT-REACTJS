import './styles.css'

export default function Folder() {
    return(
        <header className="site-header">
            <div className="site-header__inner">
                <a className="brand" href="/" aria-label="Petshop Companheiro Fiel">
                    <span className="brand__mark" aria-hidden="true">PF</span>
                    <span>
                        <strong>Petshop</strong>
                        <small>Companheiro Fiel</small>
                    </span>
                </a>
                <nav className="main-nav" aria-label="Navegação principal">
                    <a className="main-nav__link" href="#servicos">Serviços</a>
                    <a className="main-nav__link" href="#dicas">Dicas</a>
                    <a className="main-nav__link" href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    )


}