import "../css/components/Boton.css"
//import "../assets/css/components/Boton.css"

const Boton = (props) => {
    return <button className="boton">{props.children}</button>
}

export default Boton