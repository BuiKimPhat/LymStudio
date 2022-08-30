import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Navbar() {
  return (
    <>
      <div className="container d-flex">
        <img src="./lymlogo.png" alt="LymStudio logo" height="125" />
        <div className="ml-auto my-auto">
          {/* TODO: Cart, Login, Signup */}
        </div>
      </div>
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mới nhất</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bán chạy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Khuyến mãi</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
          </div>
        </div>
      </nav>
    </>

  )
}