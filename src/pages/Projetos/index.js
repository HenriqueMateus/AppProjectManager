import React, { useEffect, useState } from 'react'
import { ViewList, AddCircle, Done, Forward } from '@material-ui/icons';
import './style.css'
import { green } from '@material-ui/core/colors';
export default function Projetos(params) {
    const [valor, setValor] = useState(0)
    const [list, setList] = useState([])
    const scrollDireta = (id) => {
        let scrollId = document.querySelector(id)

    }

    return (
        <div>
            <div className='appbar'><ViewList onClick={() => console.log('ok')} />
                <h2> Projetos</h2>
            </div>
            <div className='barList'></div>
            <div className='blocProjetos' id='pendentes'>
                <h2>Pendentes</h2>
                <div className='scrollProjetos'>
                    <div className='cardProjeto'>
                        <div className='headerProjeto'><h3>Projeto TAL</h3></div>
                        <div className='bodyProjeto'><p>A vida de redator freelancer não é fácil. Entre se manter atualizado em Marketing de Conteúdo e buscar novos clientes, também temos de dar muita atenção a uma habilidade básica: a escrita.</p>
                            <p><strong>Criado por:</strong>Mateus Henrique de Oliveira</p></div>
                        <div className='overProjeto'>
                            <button><Done style={{ color: green[500] }} /> Aprovar</button>
                            <button><Forward /> Ingressar</button>
                        </div>
                    </div>


                </div>


            </div>
            <div className='blocProjetos'>
                <h2>Em andamento</h2>
                <div className='scrollProjetos'>
                    <div className='cardProjeto'>
                        <div className='headerProjeto'><h3>Projeto TAL</h3></div>
                        <div className='bodyProjeto'><p>A vida de redator freelancer não é fácil. Entre se manter atualizado em Marketing de Conteúdo e buscar novos clientes, também temos de dar muita atenção a uma habilidade básica: a escrita.</p>
                            <p><strong>Criado por:</strong>Mateus Henrique de Oliveira</p></div>
                        <div className='overProjeto'>
                
                        </div>
                    </div>


                </div>
            </div>
            <div className='blocProjetos'>
                <h2>Concluídos</h2>
                <div className='scrollProjetos'>
                    <div className='cardProjeto'>
                        <div className='headerProjeto'><h3>Projeto TAL</h3></div>
                        <div className='bodyProjeto'><p>A vida de redator freelancer não é fácil. Entre se manter atualizado em Marketing de Conteúdo e buscar novos clientes, também temos de dar muita atenção a uma habilidade básica: a escrita.</p>
                            <p><strong>Criado por:</strong>Mateus Henrique de Oliveira</p></div>
                        <div className='overProjeto'>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}

