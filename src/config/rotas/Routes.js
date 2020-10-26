import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../App.js'
import Projetos from '../../pages/Projetos'
import Cadastro from '../../pages/Cadastro_usuario'

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/projetos" component={Projetos} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </ BrowserRouter>
    )
}
export default Rotas