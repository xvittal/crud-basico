//=>dando nomes para as actions e definindo o que cada uma faz
const actions = {
    mensagem: () => ({
        type: actionsTypes.MOSTRA_MSG
    }),
    outraMensagem: () =>({
        type: actionsTypes.OUTRA_MSG
    })
}
//posso fazer esse trecho em outro arquivo!, ou poderia colocar de forma direta!
const actionsTypes = {
    MOSTRA_MSG: 'MOSTRA_MSG',
    OUTRA_MSG: 'OUTRA_MSG'
}

export { actions, actionsTypes }