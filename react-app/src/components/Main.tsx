import Cards from "./Cards";
import { FakeApi } from "./FakeApi";
import '../App.css'
import Carrousel from "./Carrousel";

function Main() {

    const fakeApi = JSON.stringify(FakeApi());

    return (
        <main className="custom-gradient-bg">
            <Carrousel />
            <div className="px-4 pt-5 my-5 text-center">
                <h1 className="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="container px-5 d-flex">
                        <img src="./imgs/Carrousel/carrousel-img-3.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                        <img src="./imgs/Carrousel/carrousel-img-1.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto text-bg-primary p-4 rounded shadow-lg opacity-75">
                        <img className="icon" src="/src/assets/spider-man-icon.svg" alt="" height={50} width={50} />
                        <h1 className="fw-light  text-light">
                            Spidy-Friends  Album
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