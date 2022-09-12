function Props({name, adress, pic}){
    return (
      <>
        <h1>nome: {name}</h1>
        <h2>endereço: {adress}</h2>
        <img src={pic} alt="imagem" />
      </>
    );
}

export default Props;