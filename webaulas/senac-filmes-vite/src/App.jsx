import './App.css'
import Conta from './pages/Conta'
import Header from './components/header/Header'
import CardFilme from './components/card-filme/CardFilme'
import ListaFilmes from './components/card-filme/ListaFilmes'
import DadosAtores from './components/dados-atores/DadosAtores'

export default function App() {

  const ateoUltimoHomem = {
    titulo: 'Até o Último Homem',
    anoLancamento: '2016',
    rate: '9.0',
    poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fTuxNlgEm04PPFkr1xfK94Jn8BW.jpg'
  }

  const homemFormigaEaVespa = {
    titulo: 'Homem Formiga e a Vespa: Quantumania',
    anoLancamento: '2023',
    rate: '6.0',
    poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg'
  }

  const lugarSilencioso = {
    titulo: 'Lugar Silencioso',
    anoLancamento: '2018',
    rate: '9.8',
    poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6UPiMUeoZuCCBYA457v4XJ7ENQJ.jpg'
  }

  return ( 
    <div className="App">

      <Header />
      <h2>Filmes em Alta</h2>

      <section className='secaoFilmes'>
        <CardFilme filme={ateoUltimoHomem} />
        <CardFilme filme={homemFormigaEaVespa} />
        <CardFilme filme={lugarSilencioso} />
      </section>

      {/* <DadosAtores/> */}
      {/* <Conta /> */}
    </div>
  )
}