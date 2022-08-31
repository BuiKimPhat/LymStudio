import Link from 'next/link';

/*
    props: {
        items: Banner[]
    }
*/

const Carousel = props => (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {props.items.map((banner, index) => index == 0 ? (
                <button key={banner.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`}></button>
            ) : (
                <button key={banner.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="" aria-label={`Slide ${index + 1}`}></button>
            ))}
        </div>
        <div className="carousel-inner">
            {props.items.map((banner, index) => (
                <div key={banner.id} className={`carousel-item ${index == 0 ? "active" : ""}`} data-bs-interval="3000">
                    <Link href={banner.url ? banner.url : "#"}><a>
                        <img src={banner.image.publicUrl} className="d-block w-100" alt="Khuyến mãi" />
                    </a></Link>
                </div>
            ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
)

export default Carousel;