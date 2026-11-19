import './styles.css'

export default function Header() {
    return(
       <footer className="site-footer">
        <div className="site-footer__inner">
            <p>
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
            </p>
            <strong>Petshop Companheiro Fiel</strong>
        </div>
       </footer>
    )


}