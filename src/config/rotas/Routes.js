import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../App.js'
import Projetos from '../../pages/Projetos'

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/projetos" component={Projetos} />
            </Switch>
        </ BrowserRouter>
    )
}
export default Rotas