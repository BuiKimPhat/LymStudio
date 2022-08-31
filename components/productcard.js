import Link from 'next/link';
import { NumberDotFormat } from '../utils/utils'

/*
    props: {
        href,
        thumbnailSrc,
        name,
        price
    }
*/
const ProductCard = props => (
    <Link href={props.href}><a>
        <div className="card product-card">
            <img className="card-img-top" src={props.thumbnailSrc} alt="Product thumbnail" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <p className="card-text text-center"><b>{NumberDotFormat(props.price)} VNĐ</b></p>
            </div>
        </div>
    </a></Link>
)

export default ProductCard;