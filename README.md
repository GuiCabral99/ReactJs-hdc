# ReactJs-hdc
- Iniciar projeto:
    yarn dev

# PropTypes
- Importando o PropTypes:
    import PropTypes from "prop-types";

- Adicionando o PropTypes:
    NomeComponente.propTypes = { 
        NomeVar1: PropTypes.string, 
        NomeVar2: PropTypes.number };

    NomeComponente.defaultProps = {
    NomeVar1: "mensagem padrão",
    NomeVar2: "mensagem padrão 2" };

# React Hook
- Importando o useState:
    import { React, useState } from "react";

- Criando uma variavel:
    const [exemplo, setExemplo] = useState();