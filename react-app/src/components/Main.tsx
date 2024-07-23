import Cards from "./Cards";
import { FakeApi } from "./FakeApi";
import '../App.css'
import Carrousel from "./Carrousel";

function Main() {

    const fakeApi = JSON.stringify(FakeApi());

    return (
        <main className="custom-gradient-bg">
            <Carrousel />
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto text-bg-primary p-4 rounded shadow-lg opacity-75">
                        <img className="icon" src="/src/assets/spider-man-icon.svg" alt="" height={50} width={50} />
                        <h1 className="fw-light  text-light">
                            Spidy-Friends - Album
                        </h1>
                        <p className="lead text-light">Este es una pequeña App desarrollada en React para fans del trepamuros. Sobre información, datos, historia, de todas las versiones y tierras del multiverso de Spider-Man y sus villanos. Sigue en desarrollo, por lo que se iran agregando funcionalidades, items, buscadores, filtros, etc.</p>
                        <span className="lead text-light">¡Gracias por su visita!</span>
                    </div>
                </div>
            </section>

            <Cards data={fakeApi} />

        </main>
    )
}

export default Main