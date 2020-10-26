import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../App.js'
import Projetos from '../../pages/Projetos'
import WorkProjeto from '../../pages/WorkProjeto'
import Cadastro from '../../pages/Cadastro_usuario'

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/Projetos" exact component={Projetos} />
                <Route path="/Projetos/Orgprojeto" exact component={WorkProjeto} />
                <Route path="/Cadastro" component={Cadastro} />
            </Switch>
        </ BrowserRouter>
    )
}
export default Rotas