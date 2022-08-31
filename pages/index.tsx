import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { query } from '.keystone/api';
import Carousel from '../components/carousel'
import CardGrid from '../components/cardgrid'

type Banner = {
  id: string,
  url: string,
  image: {
    publicUrl: string,
  }
};

type Product = {
  id: string,
  name: string,
  price: number,
  thumbnail: {
    publicUrl: string,
  }
}


// Home receives a `posts` prop from `getStaticProps` below
export default function Home({ banners, products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {banners.length > 0 ? (
        <Carousel items={banners} />
      ) : ""}
      <div className='container row my-4'>
        <div className="col-sm-4">
          <Link href="/"><a>
            <div id="clothing" className="card product-type-card m-2">
              <div className="card-body row">
                <h5 className="card-title my-auto text-center">QUẦN ÁO</h5>
              </div>
            </div>
          </a></Link>
        </div>
        <div className="col-sm-4">
          <Link href="/"><a>
            <div id="accessories" className="card product-type-card m-2">
              <div className="card-body row">
                <h5 className="card-title my-auto text-center">PHỤ KIỆN</h5>
              </div>
            </div>
          </a></Link>
        </div>
        <div className="col-sm-4">
          <Link href="/"><a>
            <div id="others" className="card product-type-card m-2">
              <div className="card-body row">
                <h5 className="card-title my-auto text-center">KHÁC</h5>
              </div>
            </div>
          </a></Link>
        </div>
      </div>

      <div className='container'>
        <h4 className="text-divider"><span>
          <Link href="/newest"><a>Sản phẩm mới nhất</a></Link>
        </span></h4>
      </div>

      <CardGrid expandSize="sm" colNum="4" items={products} />
    </div>
  );
}

export async function getStaticProps() {
  const banners = (await query.Banner.findMany({ query: 'id url image { publicUrl }' })) as Banner[];
  const products = (await query.Product.findMany({
    orderBy: [{ createdAt: 'desc' }],
    take: 6,
    query: 'id name price thumbnail { publicUrl }'
  })) as Product[];
  return {
    props: {
      banners, products
    },
  };
}