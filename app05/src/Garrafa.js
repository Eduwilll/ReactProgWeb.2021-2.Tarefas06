import React, { Component } from 'react';
class Garrafa extends Component {


    componentWillUnmount () {
        alert('O componente chamado Cabecalho está prestes a ser desmontado.')
    }

    render() {
        return (
            <div>
                <h1>" Olá, React!"</h1>
            </div>
        );
    }
}

export default Garrafa;
