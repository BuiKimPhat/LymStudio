import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { query } from '.keystone/api';
import CardGrid from '../components/cardgrid'

type Product = {
  id: string,
  name: string,
  price: number,
  thumbnail: {
    publicUrl: string,
  }
}

export default function Newest({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className='container'>
        <h4 className="text-divider"><span>
          <Link href="/newest"><a><b>SẢN PHẨM MỚI NHẤT</b></a></Link>
        </span></h4>
      </div>

      <CardGrid expandSize="sm" colNum="4" items={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = (await query.Product.findMany({
    orderBy: [{ createdAt: 'desc' }],
    take: 32,
    query: 'id name price thumbnail { publicUrl }'
  })) as Product[];
  return {
    props: {
      products
    },
  };
}