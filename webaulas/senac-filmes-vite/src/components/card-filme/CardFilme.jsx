import './CardFilme.css'
import './ListaFilmes'
import { useState } from "React";

export default function CardFilme({filme}) {

    // hooks 
    const [favoritado, setFavoritado] = useState(false)

    function favoritar() {
        if (favoritado == false) {
            setFavoritado(true)
        } else {
            setFavoritado(false)
        }
    }

    return (
        <section>
            <div className='CardFilme'>
                <img src={filme.poster} alt={`${filme.titulo} (${filme.fanoLancamento})`}/>
                <h3>{filme.titulo}</h3>
                <span>{filme.rate}</span>

                <p ><strong>
                    {favoritado ? 'favoritado' : ''}
                </strong></p>

            </div>
            <div>
                <a className='detalhes' href='#'>Detalhes</a>
                <button className='botao' onClick={favoritar}>Favoritar</button>
            </div>
        </section>
    )
} 
