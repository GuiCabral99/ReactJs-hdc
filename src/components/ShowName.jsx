import { useState } from "react";

import GetName from "./GetName";
import RenderName from "./RenderName";

function ShowName() {

    const [nome, setNome] = useState();

    return (
        <>
            <GetName  setNome={setNome} />
            <RenderName nome={nome} />
        </>
  );
}

export default ShowName;
