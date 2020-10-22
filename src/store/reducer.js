
import {actionsTypes} from './actions' //=> importando as actionstypes de actions

const INITIAL_STATE = {mensagem: 'algo aqui!'} //=> como a aplicação vai iniciar.

const teste = () =>{
    return "batata"
}

const reducers = (state = INITIAL_STATE, action) =>{ 
    switch (action.type) {
        case actionsTypes.MOSTRA_MSG:
            //> onde a logica da aplicação ira ocorrer. posso fazer separado e chamar a funcação aqui?
            return  {...state, mensagem: teste()} 
        case actionsTypes.OUTRA_MSG:
            const teste2 = "beterraba"
            return {...state, mensagem: teste2}
        default:
            //=> retorna padrão, nesse caso o valor inicial.
            return state 
    }
}

//=> ficar esperto aqui, se o nome for diferente na hora que exporta essa função, do local que está chamando irá dar erro.
export {reducers}