import { ReactNode } from "react";

interface CardProps {
    children: ReactNode; // la propiedad 'body' se cambio por 'children' y este children su tipado paso a ser un nodo de React => 'ReactNode' de React. Para que el componente Card pueda recibir otro componente.
}


function Card(props: CardProps) {
    const { children } = props; // Object Destructuring
    return (
        <div className="card">
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

interface CardBodyProps {
    title: string,
    text?: string // el signo de  interrogación indica que tal propiedad NO es obligatorio pasarla o asignarla cuando se quiera usar este componente.
}

export function CardBody(props: CardBodyProps) {
    const { title, text } = props; // Object Destructuring
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {text}
            </p>
        </>
    )
}

export default Card;