
type dataType = {
    id: number,
    name: string,
    details: string,
    img: string;
}
interface CardApiProps {
    data: dataType[];
}

function CardApi({ data }: CardApiProps) {
    return (
        <>
            {data.map((e) => (
                    <>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img key={e.id} src={e.img} alt="Image-spider" className="bd-placeholder-img card-img-top" width="100%" height="225" />
                                <div className="card-body">
                                    <h1 key={e.name} className="card-title">{e.name}</h1>
                                    <p key={e.details} className="card-text">{e.details}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )
}

export default CardApi;