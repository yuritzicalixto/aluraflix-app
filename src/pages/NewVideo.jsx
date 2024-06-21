// import "../css/components/newvideo.css"
import "../assets/css/components/newvideo.css"
import CampoTexto from "./CampoTexto"

const NewVideo =()=> {
    return (
        <section className=" form form-main">
            <form className="form-container">
                <div className="form-container-title">
                    <h1>NUEVO VIDEO</h1>
                    <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
                </div>
                <div className="form-container-head">
                    <h2>Crear Tarjeta</h2>
                </div>
                    <CampoTexto/>
                    <CampoTexto/>
            </form>
        </section>
    )
}

export default NewVideo