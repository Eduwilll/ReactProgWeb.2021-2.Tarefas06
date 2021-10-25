import React, { Component } from 'react';

class Cabecalho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        }
    }

    componentDidMount() {
        console.warn("componentDidMount")
        setTimeout(
            () => this.configurarTempoLimite(),
            1000
         );
    };

    configurarTempoLimite = () => {
        this.setState({
          corFavorita: "amarelo"
        });
    }

    componentDidUpdate(prevState, prevProps) {
        console.warn("componentDidUpdate")
        console.log(this.state.corFavorita)
        console.log(prevProps)

        if (prevProps.corFavorita !== this.props.corFavorita) {
            console.log("Entou no if")
            document.querySelector('#meuDiv').innerHTML = `<h1>A minha cor favorita é ${this.state.corFavorita}</h1>`

        }
    }

    render() {
        const {corFavorita} = this.state;
      
        return(
            <div>       
                <h1 >A minha cor favorita é {corFavorita}.</h1> 
                <div id='meuDiv'>
                    <h1>A minha cor favorita atualizada é {corFavorita}.</h1> 
                </div>
            </div>
        );
    }
}

export default Cabecalho;
