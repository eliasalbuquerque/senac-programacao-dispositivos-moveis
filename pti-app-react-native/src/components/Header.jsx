import './Header.css'

export default function Header() {
    return (
        <div>
            <div className='name-1st'>
                <h1>Foodi</h1>
                <h1 className='name-2nd'>App</h1>
            </div>

            <section className='box search'>
                <p>Campo de pesquisa</p>
            </section>

            <section className='box foods'>
                <h2>Grupo de alimentos</h2>
            </section>
        </div>
    )
} 