import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    };

    submitHandler = () => {
        this.setState( )  /* Conectar con API de Google a la base de datos de gmail */
    }

    clickHandler = () => {
        let password = document.getElementById('keyUserField').toggleAttribute('type');
        if (password === true) {
            document.getElementById('keyUserField').setAttribute('type', 'password');
            document.getElementById('opened-eye').toggleAttribute('hidden');
            document.getElementById('closed-eye').toggleAttribute('hidden');
        };
        if ((password === false)) {
            document.getElementById('opened-eye').toggleAttribute('hidden');
            document.getElementById('closed-eye').toggleAttribute('hidden');
        };
    } 

    render() {
        return (
            <div id="down">
                <h5 className="h4">BIENVENID@ {this.props.name}</h5>
                <span>¿Qué deseas hacer?</span>
                <br></br>
                <h5 className="h6">Iniciar sesión</h5>
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={ this.submitHandler }><img src="https://img.icons8.com/cute-clipart/30/000000/google-logo.png" /> INICIAR SESION CON GOOGLE</button>
                <div>    
                    <div className="mt-3">
                        <label htmlFor="emailUserField" className="form-label"><img src="https://img.icons8.com/windows/30/000000/gmail.png"/></label>
                        <input type="email" className="form-control" id="emailUserField" placeholder="Ingresa correo electrónico"></input>
                    </div>

                    <div className="container mt-2">
                        <label htmlFor="keyUserField" className="form-label">Contraseña</label>
                        <div className="row">
                            <input type="password" className="form-control mt-1 col" id="keyUserField" placeholder="**************" />
                            <div onClick={this.clickHandler} className="col-sm">
                                <img src="https://img.icons8.com/small/30/000000/visible.png" hidden={false} id="opened-eye" />
                                <img src="https://img.icons8.com/small/30/000000/invisible.png" hidden={true} id="closed-eye" />
                            </div>
                        </div>
                    </div> 

                    <div className="d-grid gap-2">
                        <input type="submit" value="Enviar" className="btn btn-success" />
                    </div>
                </div>
                
                
                <small className="mt-5 mb-2">o</small>

                <h6><a href="#">Regístrate</a></h6>
                <button type="button" className="btn btn-outline-primary btn-sm"><img src="https://img.icons8.com/cute-clipart/30/000000/google-logo.png" /> REGISTRARSE CON GOOGLE</button>
            </div>
        );
    };
}

export default Login;