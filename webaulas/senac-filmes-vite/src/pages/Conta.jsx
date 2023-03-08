import { useState } from "React";
import './Conta.css';

export default function Conta() {

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [error, setError] = useState(false);

    function handleNome(valor) {
        setNome(valor)
    }
    
    function handleSenha(valor) {
        setError(valor.length < 8)
        setSenha(valor)
    }

    return (
        <form>
            <label htmlFor='nome'>Nome</label>
            <input 
                type='text' 
                id='nome' 
                value={nome}
                onChange={(e) => {handleNome(e.target.value)}}
            />
            
            <label htmlFor='senha'>Senha</label>
            <input 
                type='password' 
                id='senha' 
                value={senha}
                onChange={(e) => {handleSenha(e.target.value)}}
            />

            {error && <span>Senha invávlida</span>}

            <button disabled={error}>Salvar</button>
        </form>
    )
}