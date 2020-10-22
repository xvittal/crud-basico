//=> segundo modelo com hooks
import React from 'react';
import { useDispatch} from 'react-redux';
import { useSelector} from 'react-redux';
import { actions } from '../store/actions';

function testes() {
    //=> por algum motivo está dizendo que está errado esse hooks...
    //...não consegui resolver, mas seria assim a outra resolução de problema
    const mensagemv = useSelector(state => state.mensagem.mensagem);  // <-- erro aqui.
    const dispatch = useDispatch();                 // <-- e aqui.

    const mensagem = () => dispatch(actions.mensagem());
    const outraMensagem = () => dispatch(actions.outraMensagemmensagem());

    return(
        <>
            <h1>{mensagemv}</h1>
            <button onClick={mensagem}>MSG</button>
            <button onClick={outraMensagem}>OUTRA MSG</button>
        </>
    )
}

// export default teste;
export default testes;