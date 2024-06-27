import "../css/components/CampoTexto.css"
//import "../assets/css/components/CampoTexto.css"

const CampoTexto =(props)=> {
    const placeholderModificado=`${props.placeholder}...`;
    return (
        <section className="formularios">
            <div className="form-campos">
            <label>{props.titulo}</label>
            <input placeholder={placeholderModificado} required={props.required}/>
            </div>

            {/* <div className="form-campos">
            <label>Categoria</label>
            <input placeholder="Ingresa nombre"/>
            </div>

            <div className="form-campos">
            <label>Imagen</label>
            <input placeholder="Ingresa nombre"/>
            </div>
            
            <div className="form-campos">
            <label>Video</label>
            <input placeholder="Ingresa nombre"/>
            </div>

            <div className="form-campos">
            <label>Descripción</label>
            <input placeholder="Ingresa nombre"/>
            </div> */}
            
        </section>
    )
}

export default CampoTexto