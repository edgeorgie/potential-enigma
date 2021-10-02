import React from 'react';


const data = [
  {id: 1, email: "hom.simpson64@gmail.com", phoneNumber: 1234567890, address: "Av. Siempreviva # 123", firstName:"Homero", lastName: "Simpson"},
  {id: 2, email: "bart.simpson@gmail.com", phoneNumber: 9876543210, address: "Calle 4 Av. Libertadores # 225", firstName: "Bartolome", lastName: "Simpson"},
  {id: 3, email: "marge024@hotmail.com", phoneNumber: 2468097531, address: "Av. Siempreviva # 123", firstName:"Marge", lastName: "Simpson"},
  {id: 4, email: "lisimpson94@gmail.com", phoneNumber: 3498567891, address: "Av. Siempreviva # 123", firstName:"Lisa", lastName: "Simpson"}
]

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: '',
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: ''
      }
    };

  };

  /*eliminar = (dato) => {
    let option = window.confirm("¿Estás seguro que deseas eliminar éste dato?");
    if (option) {
      let contador = 0;
      let arregloUsuarios = this.state.data;

      arregloUsuarios.map((registro) => {
        if (dato.id === registro.id) {
          arregloUsuarios.splice(contador, 1);
        }
        contador++;
      })
        
      this.setState({data: arregloUsuarios});
      
    }
      
  };

  eliminar = (id) => {
    let option = window.confirm("¿Estás seguro que deseas eliminar éste dato?");
    if (option) {
      let arregloUsuarios = this.state.data;

      for (let i=0; i < arregloUsuarios.length; i++) {
        if (arregloUsuarios[i].id == id) {
          arregloUsuarios.splice(i, 1);
        }
        
      };
      this.setState({data: arregloUsuarios});
      
    }
      
  };*/

  modalActualizar = () => {

  }

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true
    });
  };

  cerrarModalActualizar = () => {
    this.setState({
      modalActualizar: false
    });
  };

  cerrarModalInsertar = () => {
    this.setState({
      modalInsertar: false
    });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
  }

  render() {

    return (
      <div className="container">
        
        <div className="molecula">
          <input type="button" className="btn btn-outline-success mt-5" value="Crear" />
          <table className="table" id="t-usr">
            <thead>
              <tr>
                <th>Correo</th>
                <th>Primer nombre</th>
                <th>Apellido</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.email}</td>
                  <td>{dato.firstName}</td>
                  <td>{dato.lastName}</td>
                  <td>{dato.address}</td>
                  <td>{dato.phoneNumber}</td>
                  <td><button type="button" className="btn btn-primary btn-sm">Editar</button>
                    <button type="button" className="btn btn-danger btn-sm" >Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
}


export default User;