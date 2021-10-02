import React from 'react';
import styles from './PaginaNoEncontrada.module.css';


const PaginaNoEncontrada = () => (
  <div className={styles.PaginaNoEncontrada} >
    <div className="alert alert-info" role="alert" id="header">
      <p className="h5 text-center">
        No se encontró la página 
        <br></br>
        <a href="/users" className="h6 text-center">
          Ir a usuarios
        </a>
      </p>
      
    </div>
    
  </div>
);



export default PaginaNoEncontrada;
