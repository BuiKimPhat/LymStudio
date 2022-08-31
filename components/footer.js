// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer>
    <div className="p-4 text-center">
      <div>
        <h6><b><i>Địa chỉ: </i></b>98 Nguyễn Lương Bằng, Q. Liên Chiểu, Đà Nẵng</h6>
        <h6><b><i>Mở cửa: </i></b>9h - 22h</h6>
      </div>
      <div className="p-2">
        <a className="m-2" href="https://www.facebook.com/Lymstudio.womenfashion" target="_blank">
          <FontAwesomeIcon className="brand-icon" icon={faFacebook} />
        </a>
        <a className="m-2" href="https://www.instagram.com/lymstudios/" target="_blank">
          <FontAwesomeIcon className="brand-icon" icon={faInstagram} />
        </a>
      </div>
      <h6 className="text-muted">© 2022 Copyright: Lym Studio</h6>
    </div>
  </footer>
)
export default Footer;