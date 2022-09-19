import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function emptyEmail(e) {
        e.preventDefault();
        setUserEmail('');
    }

    return (
      <>
        <h2>Cadastre o seu Email</h2>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendEmail}>Enviar email</button>
          {userEmail && (
            <div>
              <p>O email cadastrado é {userEmail}</p>
              <button onClick={emptyEmail}>Limpar email</button>
            </div>
          )}
        </form>
      </>
    );
}

export default Condicional;