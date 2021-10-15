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
        setInterval(
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
            this.edit();
        }
    }

    edit(meuDiv){
        console.log(this.refs[meuDiv])
        this.refs[meuDiv].innerHTML="i am clicked";
    }
    render() {
        const {corFavorita} = this.state;

        return (
            <div ref = {meuDiv} >
                <h1>A minha cor favorita é {corFavorita}.</h1> 
            </div>
            
        );
    }
}

export default Cabecalho;
