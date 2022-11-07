function Tabla(props){
    return (
        <div className="mx-5">
            <table className = "table">
                <caption>{props.name}</caption>
                <Header columns={props.columnsAlias} tools={props.tools} />
                <Body
                   //Rutas
                    path={props.path}  
                    //Datos que se van a visualizar en las celdas  
                    data={props.data}
                    //Columnas
                    columns={props.columns}
                    //Botones Editar y Elimniar
                    tools={props.tools}
                />
            </table>
        </div>
    );  
}

export default Tabla;