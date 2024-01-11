function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, alterar, remover}) {
    return(
        <form>
            <input type="text" onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" value={obj.nome}/>
            <input type="text" onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" value={obj.marca}/>

        {
            botao
            ?
            <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary"/>
            :
            <div>
                <input type="button" value="Alterar" className="btn btn-warning" onClick={alterar} />
                <input type="button" value="Remover" className="btn btn-danger" onClick={remover} />
                <input type="button" value="Cancelar" className="btn btn-secondary" onClick={cancelar} />
            </div>
        }
        </form>
    )
}

export default Formulario;