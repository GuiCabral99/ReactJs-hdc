import { PropTypes } from "prop-types";

import EventBtn from "./EventBtn";


function Evento() {


    function meuEvento() {
        alert("evento em props")
    }

    function segundoEvento() {
        alert("segundo evento em props")
    }


    return ( 
        <>
            <p>Clique para disparar um evento:</p>
            <EventBtn event={meuEvento} text="botao evento" />
            <EventBtn event={segundoEvento} text="segundo botao evento" />
            
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