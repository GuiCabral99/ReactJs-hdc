import Props from "./Props";

function HelloWorld() {
    return (
      <div>
        <h2>Lista</h2>
        <ul>
          <Props marca="Ferrari" lancamento={1985} />
          <Props marca="Fiat" lancamento={1964} />
          <Props marca="Renault" lancamento={1975} />
          <Props />
        </ul>
      </div>
    );
}

export default HelloWorld;