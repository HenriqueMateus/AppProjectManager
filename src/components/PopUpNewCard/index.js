import React, { useEffect, useState } from 'react'
import Modal from 'react-awesome-modal'
import './style.css'
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function PopUpNewCard(props) {
    const { status, setState, categoria } = props
    const [card, setCard] = useState({ nome: null, descricao: '', categoria: '' })
    useEffect(() => {
        return setCard({ nome: '', descricao: '', categoria: '' })
    }, [status])
    const nomeChange = (event) => {
        let novoCard = { ...card }
        novoCard.nome = event.target.value
        novoCard.categoria = categoria
        setCard(novoCard)
    }
    const descricaoChange = (event) => {
        let novoCard = { ...card }
        novoCard.descricao = event.target.value
        setCard(novoCard)
    }
    const adicionarCard = () => {
        if (card.nome) {
            sessionStorage.removeItem('card')
            let stringCard = JSON.stringify(card)
            sessionStorage.setItem('card', stringCard)
            setState(false)
        } else {
            alert('Favor Inserir o nome da tarefa')
        }
    }
    return (
        <section className='modalStyle'>
            <Modal visible={status} width='600' height='320px' effect='fadeInUp'
                onClickAway={() => setState({ status: false, categoria: '' })} >
                <div className='headerModal'>
                    <h1>Adicionar nova tarefa</h1>
                </div>
                <div className='labelModal'>
                    <label>Nome:</label>
                    <input type='text' value={card.nome} onChange={nomeChange}></input>
                </div>
                <div className='bodyModal'>
                    <label>Descrição:</label>
                    <textarea type='text' onChange={descricaoChange} name="message" rows="10" cols="30"></textarea>


                </div>
                <div className='endModal'>
                    <button onClick={adicionarCard}>Adicionar</button>
                </div>
            </Modal>
        </section>

    )
}