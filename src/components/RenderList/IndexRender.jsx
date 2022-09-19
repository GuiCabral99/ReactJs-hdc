import RenderList from "./RenderList";

function IndexRender() {
    
    const meusItens = ["react", "vue", "angular"];

    return (
      <>
        <h1>Renderizando Listas</h1>
        <RenderList itens={meusItens} />
        <RenderList itens={[]} />
      </>
    );
}

export default IndexRender;