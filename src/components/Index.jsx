import Lists from "./Lists";

function Index() {
    return (
      <div>
        <h2>Lista</h2>
        <ul>
          <Lists marca="Ferrari" lancamento={1985} />
          <Lists marca="Fiat" lancamento={1964} />
          <Lists marca="Renault" lancamento={1975} />
          <Lists />
        </ul>

        
      </div>
    );
}

export default Index;