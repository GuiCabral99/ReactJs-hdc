function RenderName({nome}) {

    function Saldacao(algumNome){
        return(<p>Olá, {algumNome}</p>)
    }

    return ( 
        <>
            {nome && Saldacao(nome)}
        </>
     );
}

export default RenderName;