import React from 'react'
import Modal from 'react-awesome-modal'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBr from 'date-fns/locale/pt-BR';
import './style.css'
import "react-datepicker/dist/react-datepicker.css";

export default function PopUp({status, setStatus}) {
    return (
        <section>
            <Modal visible={status} width='600' height='650' effect='fadeInUp'
                onClickAway={() => setStatus(false)}>
                <div className='labelCardModal'>
                    <h2>Projeto TAL</h2>

                </div>
                <div className='bodyCardModal'>
                    <div className='topBody'>
                        <label>Data de Entrega</label>
                        <DatePicker
                            timeInputLabel="Time:"
                            dateFormat="dd/MM/yyyy h:mm aa"
                            showTimeInput
                            locale='pt-BR'
                            minDate={new Date()}
                        />

                    </div>
                    {/* <textarea type='text' name="message" rows="10" cols="30"></textarea> */}
                    <label>Descrição</label>
                    <CKEditor
                        style={{ height: '200px' }}
                        editor={ClassicEditor}
                    />
                </div>
                <div className='endPopUp'>
                    <div className='topList'>
                        <label id='titleList'>Participantes</label>
                        <label>Pesquisar: </label>
                        <input type='text'></input>
                    </div>
                    
                    <ul>
                        <li>Mateus
                            
                        </li>
                        <li>henrique</li>
                        <li>Oliveira</li>
                        <li>Eduardo</li>
                        <li>Mateus</li>
                        <li>henrique</li>
                        <li>Oliveira</li>
                        <li>Eduardo</li>
                        <li>Mateus</li>
                        <li>henrique</li>
                        <li>Oliveira</li>
                        <li>Eduardo</li>
                        <li>Mateus</li>
                        <li>henrique</li>
                        <li>Oliveira</li>
                        <li>Eduardo</li>
                    </ul>
                    <div className='endList'>
                        <div className='topEnd'><button >Adicionar Participante</button></div>
                        <button id='ExcluirProj'>Excluir</button>
                        <button id='modificarProj'>Modificar</button>
                        <button id='salvarProj'>Salvar</button>
                        
                    </div>
                    
                </div>
            </Modal>
        </section>
    )
}

