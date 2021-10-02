import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';
import Home from './components/Home';
import User from './components/User/User';


class App extends React.Component {

    constructor() {
        super();
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/users" component={User}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route component={PaginaNoEncontrada}></Route>
                </Switch>
            </BrowserRouter>
        );
    };
}

export default App;





