//=> primeiro exemplo de como fazer para chamar o state.
import React from 'react';
import { connect } from 'react-redux'
import { actions } from '../store/actions';

const teste = ({mensagem, mensagemF, outraMensagem}) => {
    return(
        <>
            <h1>{mensagem}</h1>
            <button onClick={mensagemF}>MSG</button>
            <button onClick={outraMensagem}>OUTRA MSG</button>
        </>
    )
}

//=> faz om map da propriedade 
const mapStateToProps = state =>({
    mensagem: state.mensagem.mensagem
})

const mapDispatchToProps = dispatch => ({
    mensagemF: () => dispatch(actions.mensagem()),
    outraMensagem: () => dispatch(actions.outraMensagem())
})

// export default teste;
export default connect(mapStateToProps, mapDispatchToProps)(teste);