import React, { Component } from 'react';

class Cabecalho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        }
    }
    render() {

        const {corFavorita} = this.state;

        return (
            <div>
                <h1>A minha cor favorita é {corFavorita}.</h1>
            </div>
        );
    }
}

export default Cabecalho;
