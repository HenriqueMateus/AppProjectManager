import React, { useEffect, useState } from 'react'

export default function Projetos(params) {
    const [valor, setValor] = useState(0)
    const [list, setList] = useState([])
    useEffect(() => {
        function valordff(params) {
            setList([0, 1, 2, 3, 4])
        }
        valordff()
    }, [])
    function addList(valor) {
        //setValor(valor)
        let lista =[...list]
        lista.push(valor)
        setList(lista)
        console.log(list)
    }
    return (
        <div>
            <p> contador </p>
            <p> {valor}</p>
            <button onClick={function(){addList(1)}}> adicionar</button>
            {
                list.map((num) => 
                    <p>{num}</p>
                )

            }

        </div>
    )
}

