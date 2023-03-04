import './DadosAtores.css'

export default function DadosAtores() {
    return(
        <div className='DadosAtores'>
            <header className='h1'>Elenco</header>
            <section className='container flex'>
                <div className='box'>
                    <h2 className='nome'>Jeffrey Dean</h2>
                    <h3 className='personagem'>Gerry Fenn</h3>
                </div>
                <div className='box'>
                    <h2 className='nome'>Katie Aselton</h2>
                    <h3 className='personagem'>Natalie Gates</h3>
                </div>
                <div className='box'>
                    <h2 className='nome'>Cricket Brown</h2>
                    <h3 className='personagem'>Alice</h3>
                </div>
                <div className='box'>
                    <h2 className='nome'>Willian Sadler</h2>
                    <h3 className='personagem'>Father Hagan</h3>
                </div>            
            </section>
        </div>
    )    
}