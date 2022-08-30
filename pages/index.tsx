import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { query } from '.keystone/api';
import styles from './Home.module.css'

type Banner = {
  id: string,
  url: string,
  image: {
    publicUrl: string,
  }
};

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({ banners }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {banners.map((banner, index) => index == 0 ? (
            <button key={banner.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`}></button>
          ) : (
            <button key={banner.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="" aria-label={`Slide ${index + 1}`}></button>
          ))}
        </div>
        <div className="carousel-inner">
          {banners.map((banner, index) => (
            <div key={banner.id} className={`carousel-item ${index == 0 ? "active" : ""}`} data-bs-interval="3000">
              <Link href={banner.url}><a>
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
      <div className='container row my-4'>
        <div className="col-md-4">
          <Link href="/"><a>
            <div id="clothing" className="card product-type-card m-2">
              <div className="card-body row">
                <h5 className="card-title my-auto">QUẦN ÁO</h5>
              </div>
            </div>
          </a></Link>
        </div>
        <div className="col-md-4">
          <Link href="/"><a>
            <div id="accessories" className="card product-type-card m-2">
              <div className="card-body row">
                <h5 className="card-title my-auto">PHỤ KIỆN</h5>
              </div>
            </div>
          </a></Link>
        </div>
        <div className="col-md-4">
          <Link href="/"><a>
            <div id="others" className="card product-type-card m-2">
              <div className="card-body row">
                <h5 className="card-title my-auto">KHÁC</h5>
              </div>
            </div>
          </a></Link>
        </div>
      </div>
      <div className='container'>
        <h4 className="text-divider"><span>Sản phẩm mới</span></h4>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const banners = (await query.Banner.findMany({ query: 'id url image { publicUrl }' })) as Banner[];
  return {
    props: {
      banners,
    },
  };
}