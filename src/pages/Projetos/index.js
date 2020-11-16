import React, {useState} from 'react'
import { Done, ViewList, Input } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './style.css'

export default function Projetos(params) {
    const [openBar, setOpenBar] = useState(false)
    // const [list, setList] = useState([])
    // const scrollDireta = (id) => {
    //     let scrollId = document.querySelector(id)

    // }
    const viewBar = () =>{
        if(openBar){
            setOpenBar(false)
        } else {
            setOpenBar(true)
        }
    }
    return (
        <div>
            <div className='appbar'><ViewList style={{ marginRight: 'auto', marginLeft: '10px' }} onClick={() => viewBar()} />
                <h2> Projetos</h2>
            </div>
            <div className='bodyIncial'>
                { openBar &&
                    <div className='barList'>
                        <ul>
                            <li>Criar Projeto</li>
                            <li>Criar Projeto</li>
                        </ul>
                    </div>
                }
                <div className='projetosCategorias'>
                    <div className='blocProjetos' id='pendentes'>
                        <h2>Pendentes</h2>
                        <div className='scrollProjetos'>

                            <div className='cardProjeto'>
                                <Link to='/Projetos/Orgprojeto/3'>
                                    <div className='headerProjeto'><h3>Projeto TAL</h3></div>
                                    <div className='bodyProjeto'><p>A vida de redator freelancer não é fácil. Entre se manter atualizado em Marketing de Conteúdo e buscar novos clientes, também temos de dar muita atenção a uma habilidade básica: a escrita.</p>
                                        <p><strong>Criado por:</strong>Mateus Henrique de Oliveira</p></div>
                                </Link>
                                <div className='overProjeto'>
                                    <button><Done />Aprovar</button>
                                    <button><Input />Ingressar</button>
                                </div>
                            </div>



                        </div>


                    </div>
                    <div className='blocProjetos'>
                        <h2>Em andamento</h2>
                        <div className='scrollProjetos'>

                            <div className='cardProjeto'>
                                <Link to='/Projetos/Orgprojeto/1'>
                                    <div className='headerProjeto'><h3>Projeto TAL</h3></div>
                                    <div className='bodyProjeto'><p>A vida de redator freelancer não é fácil. Entre se manter atualizado em Marketing de Conteúdo e buscar novos clientes, também temos de dar muita atenção a uma habilidade básica: a escrita.</p>
                                        <p><strong>Criado por:</strong>Mateus Henrique de Oliveira</p></div>
                                </Link>
                                <div className='overProjeto'>

                                </div>
                            </div>




                        </div>
                    </div>
                    <div className='blocProjetos'>
                        <h2>Concluídos</h2>
                        <div className='scrollProjetos'>

                            <div className='cardProjeto'>
                                <Link to='/Projetos/Orgprojeto/2'>
                                    <div className='headerProjeto'><h3>Projeto TAL</h3></div>
                                    <div className='bodyProjeto'><p>A vida de redator freelancer não é fácil. Entre se manter atualizado em Marketing de Conteúdo e buscar novos clientes, também temos de dar muita atenção a uma habilidade básica: a escrita.</p>
                                        <p><strong>Criado por:</strong>Mateus Henrique de Oliveira</p></div>
                                </Link>
                                <div className='overProjeto'>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

