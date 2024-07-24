import Cards from "./Cards";
import { FakeApi } from "./FakeApi";
import "../App.css";
import Carrousel from "./Carrousel";

function Main() {
  const fakeApi = JSON.stringify(FakeApi());

  return (
    <main className="custom-gradient-bg">
      <Carrousel />
      <section className="bg-color px-5 py-5 mb-5 text-center rounded shadow-lg bg-opacity-75 ">
        <img
          className="icon"
          src="/src/assets/spider-man-icon.svg"
          alt=""
          height={50}
          width={50}
        />
        <h1 className="display-4 fw-bold text-light">Spidy-Friends Album</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-light">
            Esta es una pequeña aplicación desarrollada en React para los
            fanáticos del trepamuros. Incluye una sección de tarjetas con
            imágenes, datos, pequeñas historias y las diferentes versiones y
            tierras del multiverso de Spider-Man y sus villanos, teniendo en cuenta las peliculas, comics y videojuegos, ahi podras hacer uso de filtros y buscadores por los nombres o universo que quieras.
            La aplicación está en desarrollo continuo, por lo que se irán agregando nuevas
            funcionalidades, elementos, buscadores, filtros y más.
          </p>
          <span className="lead text-light">¡Gracias por su visita!</span>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 mt-5">
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              About me
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Repository
            </button>
          </div>
        </div>
      </section>

      <Cards data={fakeApi} />
    </main>
  );
}

export default Main;
