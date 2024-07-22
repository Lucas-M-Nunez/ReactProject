import Card, { CardBody } from "./Card"
import List from "./List"
import CardApi from './CardApi';

interface CardsProps {
    data: string
}

function Cards({ data }: CardsProps) {

    const api: [] = JSON.parse(data);
    const list = [
        'primer elemento',
        'segundo elemento',
        'tercer elemento'
    ];

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    <Card>
                        <CardBody title={"Card Body"} text={"Texto del card Body Component"} />
                        <List data={list} />
                    </Card>
                    <Card>
                        <CardBody title={"Card Body"} text={"Texto del card Body Component"} />
                        <List data={list} />
                    </Card>
                    <Card>
                        <CardBody title={"Card Body"} text={"Texto del card Body Component"} />
                        <List data={list} />
                    </Card>

                    {/* Card componente de bootstrap */}
                    <CardApi data={api} />

                </div>
            </div>
        </div>
    )
}

export default Cards