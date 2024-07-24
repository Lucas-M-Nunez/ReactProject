import "../App.css";

type Props = {
  icon: string;
  title: string;
};

function Header({ icon, title }: Props) {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none gap-3"
        >
          <img className="icon rounded-circle" src={icon} alt="imgHeader" />
          <span className="fs-4">{title}</span>
        </a>

        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <a href="#" className="nav-link text-secondary">
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlink:href="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-secondary">
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlink:href="#grid" />
              </svg>
              Cards
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-secondary">
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlink:href="#people-circle" />
              </svg>
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-secondary">
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlink:href="#people-circle" />
              </svg>
              Repository
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
