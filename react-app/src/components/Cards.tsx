import Card, { CardBody } from "./Card"
import List from "./List"
import CardApi from './CardApi';
import { FakeApi } from "./FakeApi";


function Cards() {
    console.log(FakeApi);
    

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

                    {}
                    <CardApi />
                </div>
            </div>
        </div>
    )
}

export default Cards