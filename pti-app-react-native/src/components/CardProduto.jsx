import './CardProduto.css'
import './ListaProdutos'

export default function CardProduto() {

    return (
        <div className="card">
            <div className='text'>
                <h3 className='nome-lanche'>Nome do Lanche</h3>
                <h3 className='calorias'>Calorias</h3>
                {/* <h3 className='valor'>R$ valor</h3> */}
                {/* <ListaFilmes valorLanche={} */}
            </div>

            <div className='box-img'>
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </div>
        </div>
    )
}