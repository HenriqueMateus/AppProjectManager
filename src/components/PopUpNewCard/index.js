import React, { useEffect, useState } from 'react'
import Modal from 'react-awesome-modal'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBr from 'date-fns/locale/pt-BR';
import './style.css'
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt-BR', ptBr)
setDefaultLocale('pt-BR')

export default function PopUpNewCard(props) {
    const { status, setState, categoria } = props
    const [card, setCard] = useState({ nome: null, descricao: '', categoria: '', dataEntrega: new Date(), color: 'white'})
    const [dataFinal, setDataFinal] = useState()
    useEffect(() => {
        return setCard({ nome: '', descricao: '', categoria: '',  dataEntrega: new Date(), color: 'white'})
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
    
    const onChangeDT = (date) => {
        console.log(date)
        let novoCard = { ...card }
        //let dataEntrega = format(new Date(date), 'd MMM hh:mm')
        novoCard.dataEntrega = date
        setCard(novoCard)
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
                    <input type='text' value={card.nome} maxlength="25" onChange={nomeChange}></input>
                    <br/> 
                    <label>Data Entrega:</label>
                    <DatePicker
                        selected={card.dataEntrega}
                        onChange={date => onChangeDT(date)}
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        showTimeInput
                        locale='pt-BR'
                        minDate={new Date()}
                    />
                    
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