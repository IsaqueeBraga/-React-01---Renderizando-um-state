import React, {Component} from "react";
export default class App extends
Component {
    state = {
        nome: 'Isaque',
        idade: 24,
        comidaFavorita: 'Bife com batata frita',


    }
    render(){
        return(
            <div>
                <h1>Isaque</h1>
                <h2>24</h2>
                <h3>Bife com batata frita</h3>
                <ul>
                  <li>Celebrando a vida - L7</li>
                  <li>Faça Valer - L7</li>
                  <li>O mundo é nosso - Djonga</li>
                </ul>
            </div>
        );
    }
}


