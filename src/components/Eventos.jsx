import { PropTypes } from "prop-types";



function Evento({mensagem}) {
    // Evento vinculado ao btn
    function meuEvento() {
        alert(`${mensagem}`)
    }

    return ( 
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
     );
}


// Tipagem de props
Evento.propTypes = {
    mensagem: PropTypes.string
}

Evento.defaultProps = {
    mensagem: "mensagem generica"
}

export default Evento;