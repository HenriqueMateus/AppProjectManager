import React, { useEffect, useState } from 'react'
import Modal from 'react-awesome-modal'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBr from 'date-fns/locale/pt-BR';

import './style.css'
registerLocale('pt-BR', ptBr)
setDefaultLocale('pt-BR')
export default function PopUpCard({ tarefa, status, setState }) {
    const [openEditor, setOpenEditor] = useState(true)
    const [newDescription, setNewDescription] = useState()
    const [newName, setNewName] = useState()
    const [card, setCard] = useState({ nome: '', descricao: '', categoria: '', dataEntrega: new Date(), color: 'white' })
    useEffect(() => {

    }, [])
    const handleChangeDescricao = (e, editor) => {
        const data = editor.getData()

        setNewDescription(data)
    }
    const handleChangeNome = (e) => {
        const data = e.target.value
        console.log(data)
        setNewName(data)
    }
    const saveTask = (valor) => {
        const registroTask = { ...tarefa }
        const registroState = {}
        registroState.tarefa = registroTask
        registroState.status = valor
        setState(registroState)
        // registroTask.nome = newName
        // registroTask.descricao = newDescription
        // let listCards = sessionStorage.getItem('card')
        // let listaTarefas = listCards.split('},')
        // if (registroTask.nome) {
        //     let stringCard = JSON.stringify(registroTask)
        //     for (let index in listaTarefas) {
        //         if (listaTarefas[index].endsWith("}") === false) {
        //             listaTarefas[index] = listaTarefas[index] + '}'
        //         }
        //         let tarefaChange = JSON.parse(listaTarefas[index])
        //         if (tarefa.nome === tarefaChange.nome &&
        //             tarefa.descricao === tarefaChange.descricao) {
        //             console.log('aqui')
        //             tarefaChange.nome = newName
        //             tarefaChange.descricao = newDescription
        //             listaTarefas[index] = stringCard
        //         }


        //     }
        //     console.log(listaTarefas)
        //     sessionStorage.setItem('card', listaTarefas)
        //     const registroState = { ...tarefa }
        //     registroState.status = valor
        //     setState(registroState)
        // } else {
        //     alert('Favor Inserir o nome da tarefa')
        // }
    }
    const onChangeDT = () => {

    }
    return (
        <>
            <section className='modalStyle'>
                <Modal visible={status} width='600' height='400' effect='fadeInUp'
                    onClickAway={() => saveTask(false)} >
                    <div className='labelCardModal'>
                        <input type='text' defaultValue={tarefa?.nome} onChange={(e) => { handleChangeNome(e) }}></input>

                    </div>
                    <div className='bodyCardModal'>
                        <div className='topBody'>
                            <label>Data de Entrega</label>
                            <DatePicker
                                selected={card.dataEntrega}
                                onChange={date => onChangeDT(date)}
                                timeInputLabel="Time:"
                                dateFormat="dd/MM/yyyy h:mm aa"
                                showTimeInput
                                locale='pt-BR'
                                minDate={new Date()}
                            />
                            <div className='selectStatus'>
                                <label for='statusCard'>Status:</label>
                                <select name='statusCard' id='card' defaultValue={card.categoria}>
                                    <option value='afazer'>A Fazer</option>
                                    <option value='andamento'>Em Andamento</option>
                                    <option value='concluido'>Concluido</option>
                                </select>
                            </div>

                        </div>
                        {/* <textarea type='text' name="message" rows="10" cols="30"></textarea> */}
                        <label>Descrição</label>
                        <CKEditor
                            style={{ height: '200px' }}
                            editor={ClassicEditor}
                            data={tarefa?.descricao ? tarefa?.descricao : ''}
                            disabled={openEditor}
                            onChange={handleChangeDescricao}
                            onReady={() => { setOpenEditor(false) }}
                        />
                    </div>
                </Modal>
            </section>
        </>
    )
}