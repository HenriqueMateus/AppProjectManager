import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../App.js'
import Projetos from '../../pages/Projetos'
import WorkProjeto from '../../pages/WorkProjeto'
import Cadastro from '../../pages/Cadastro_usuario'

function Rotas() {
    const [listaProjetos , setListaProjetos] = useState()
    useEffect(()=>{
        setListaProjetos(['1','2','3','4','5','6'])
    }, [])
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/Projetos" exact component={Projetos} />
                <Route path="/Projetos/Orgprojeto" component={WorkProjeto}/>
                {
                    listaProjetos?.map((protejo, index)=>
                        <Route key={index} path={"/Projetos/Orgprojeto/"+ protejo} component={WorkProjeto}/>
                    )
                }
                
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </ BrowserRouter>
    )
}
export default Rotas