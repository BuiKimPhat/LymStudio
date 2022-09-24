import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const handleSearch = e => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: { q: e.target.searchInput.value }
    });
  };
  return (
    <>
      <div className="container d-flex">
        <Link href="/">
          <a>
            <Image src="/lymlogo.png" alt="LymStudio logo" height="125" />
          </a>
        </Link>
        <div className="ml-auto my-auto">
          {/* TODO: Cart, Login, Signup */}
        </div>
      </div>
      <nav className="navbar sticky-top navbar-dark navbar-expand-md">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>TRANG CHỦ</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/newest">
                  <a className={`nav-link ${router.pathname == "/newest" ? "active" : ""}`}>MỚI NHẤT</a>
                </Link>
              </li>
              {/* TO DO: Best-selling, Promotion */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#">BÁN CHẠY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">KHUYẾN MÃI</a>
              </li> */}
              <li className="nav-item">
                <Link href="/clothing">
                  <a className={`nav-link ${router.pathname == "/clothing" ? "active" : ""}`}>QUẦN ÁO</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/accessories">
                  <a className={`nav-link ${router.pathname == "/accessories" ? "active" : ""}`}>PHỤ KIỆN</a>
                </Link>
              </li>
            </ul>
            <form onSubmit={handleSearch} className="d-flex" role="search">
              <input className="form-control me-2" name="searchInput" type="search" placeholder="Tìm kiếm" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;