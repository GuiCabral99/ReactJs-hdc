import { React, useState } from "react";

function Formulario() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log("usuario cadastrado");
        console.log(nome)
    }

    const [nome, setNome] = useState();

    return ( 
        <>
            <h2>Formulário</h2>
            <form>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input
                    type="text"
                    name="nome"
                    id="nome" 
                    placeholder="Digite seu nome"
                    onChange={(e) => {setNome(e.target.value); console.log(nome)}} />

                    <label htmlFor="senha">Senha: </label>
                    <input type="text" name="senha" id="senha" placeholder="Digite uma senha" />

                    <input type="submit" value="Cadastrar" onClick={cadastrarUsuario} />
                </div>
            </form>
        </>
     );
}

export default Formulario;