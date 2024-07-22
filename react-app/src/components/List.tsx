type ListProps = {
    data: string[];
}

export default function List({ data }: ListProps) {
    return (
        <ul className="list-group">
            {data.map( (element) => (
                <li key={element} className="list-group-item">{element}</li>
            ))}
        </ul>
    )
}