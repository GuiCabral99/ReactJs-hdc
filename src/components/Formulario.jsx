import { React, useState } from "react";


function Formulario() {


    function registerUser(e) {
        e.preventDefault();
        console.log("usuario cadastrado");
        console.log(name)
        console.log(password);
    }

    function getName(e) {
        setName(e.target.value);
    };

    function getPassword(e) {
        setPassword(e.target.value)
    }


    const [name, setName] = useState();
    const [password, setPassword] = useState();


    return ( 
        <>
            <h2>Formulário</h2>
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                    type="text"
                    name="name"
                    id="name" 
                    placeholder="Digite seu nome"
                    onChange={getName} />

                    <label htmlFor="password">Senha: </label>
                    <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    placeholder="Digite uma senha" 
                    onChange={getPassword} />

                    <input 
                    type="submit" 
                    value="Cadastrar" 
                    onClick={registerUser} />
                </div>
            </form>
        </>
     );
}

export default Formulario;