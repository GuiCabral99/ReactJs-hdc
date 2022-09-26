
function GetName({setNome}) {
    return ( 
        <>
        <input 
        type="text" 
        placeholder="Digite seu nome" 
        onChange={(e)=>{setNome(e.target.value)}}
        />
        </>
     );
}

export default GetName;