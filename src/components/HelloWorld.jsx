import Props from "./Props";

function HelloWorld() {
    return (
      <div>
        <h1>Props entre componentes</h1>
        <Props name="a" adress="b" />
      </div>
    );
}

export default HelloWorld;