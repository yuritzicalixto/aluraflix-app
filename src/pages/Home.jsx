import "../assets/css/components/Home.css"
import Equipo from "../assets/componentes/Equipo"
import img from "../assets/img/banner.png"

const Home =()=> {

    //Lista Opciones
    const equipos=[
        {
            titulo:"BACK END",
            colorPrimary:"#00C86F"
        },
        {
            titulo:"FRONT END",
            colorPrimary:"#6BD1FF"
        },
        {
            titulo:"INNOVACIÓN Y GESTIÓN",
            colorPrimary:"#FFBA05"
        }
    ]
    
    return (
         <section className="main">
            <div className="banner-main">
                <img src={img} alt="Banner"/>
            </div>
            {
                equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>)
            }
         </section>
    )
}

export default Home