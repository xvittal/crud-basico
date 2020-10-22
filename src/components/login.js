import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Login() {

const [lista, setLista] = useState([]);
const [erros, setErros] = useState(false);

useEffect(() =>{
    Listar();
}, []);

const Listar = () => {
    fetch("http://localhost/crud-basico/src/api/lista.php/")
    .then(res => res.json())
    .then(res => setLista(res))
    .catch(() => setErros(true))
}

const logar = (info) =>{
    lista.map(item => {
        if(item.login === info)
            return console.log("Logou!")
        else
            return console.log("não logou!")
    })
}

return(
    <>
        <div>
            <label>login</label>
            <input />
        </div>
        
        <div>
            <label>senha</label>
            <input />
        </div>
        <button onClick={() => logar("vital")}>Login</button>
    </>
)
}
export default Login;