import { useState } from "react";

type dataType = {
  id: number;
  name: string;
  details?: string;
  img: string;
  link: string;
};
interface CardApiProps {
  data: dataType[];
}

function CardApi({ data }: CardApiProps) {

  const [date, setDate] = useState(new Date());

  

  return (
    <>
      {data.map((e) => (
        <>
          <div key={e.id} className="col">
            <div className="card shadow-sm">
              <img
                src={e.img}
                alt="Image-spider"
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
              />
              <div className="card-body">
                <h1 className="card-title">{e.name}</h1>
                <p className="card-text">{e.details}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href={e.link} target="_blank">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        + info
                      </button>
                    </a>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Ver
                    </button>
                  </div>
                  <small className="text-body-secondary">{date.getMinutes()} mins.</small>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default CardApi;
