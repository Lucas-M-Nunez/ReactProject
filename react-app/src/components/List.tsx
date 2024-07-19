type ListProps = {
    data: string[];
}

export default function List({ data }: ListProps) {
    return (
        <ul className="list-group">
            {data.map( (element) => (
                <li className="list-group-item">{element}</li>
            ))}
            
        </ul>
    )
}