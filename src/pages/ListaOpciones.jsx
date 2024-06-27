import "../assets/css/components/ListaOpciones.css"
//import "../assets/css/components/CampoTexto.css"

const ListaOpciones =()=> {
    const equipos=[
        "BACK END",
        "FRONT END",
        "INNOVACIÓN Y GESTIÓN"
    ]
    return (
        <div className="form-campos">
            <label>Categoría</label>
            <select>
                {equipos.map( (equipo, index) => <option key={index}>{equipo}</option>
                )}
            </select>
        </div>
    )
}

export default ListaOpciones