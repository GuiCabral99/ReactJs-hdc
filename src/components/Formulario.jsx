function Formulario() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("usuario cadastrado")
    }

    return ( 
        <>
            <h2>Formulário</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
     );
}

export default Formulario;