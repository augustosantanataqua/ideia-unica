import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>HOME</h1>
            <Contador />
            <h2>teste teste teste</h2>
        </div>
    )    
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return(
        <div>
        <div>{contador}</div>
        <buttom onClick={adicionarContador}>Adicionar</buttom>
        </div>
    )
}
export default Home