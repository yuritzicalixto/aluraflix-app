import "../assets/css/components/CampoTexto.css"

const CampoTexto =()=> {
    return (
        <section className="formulario">

            <div className="form-campos">
            <label>Titulo</label>
            <input placeholder="Ingresa nombre"/>
            </div>

            <div className="form-campos">
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
            </div>
            
        </section>
    )
}

export default CampoTexto