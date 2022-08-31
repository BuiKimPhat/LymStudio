// pages/post/[slug].tsx

import { GetStaticPathsResult, GetStaticPropsContext } from 'next';

import { query } from '.keystone/api';
import Carousel from '../../components/carousel';
import { NumberDotFormat } from '../../utils/utils'
import { DocumentRenderer } from '@keystone-6/document-renderer';

export default function Product({ product }: { product: any }) {
    return (
        <div id="productPage" className='container my-4'>
            <h2 className='my-4'><b>{product.name}</b></h2>
            <div className='row'>
                <div className='col-sm-6'>
                    <Carousel items={product.images} />
                </div>
                <div className='col-sm-6 row'>
                    <div className='m-auto text-center p-4'>
                        <h4><b>Loại:</b> {product.type.name}</h4>
                        <h4><b>Kho:</b> {product.total}</h4>
                        <h3><b>{NumberDotFormat(product.price)} VNĐ</b></h3>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h4 className="text-divider"><span>
                    <b>Mô tả</b>
                </span></h4>
                <DocumentRenderer document={product.description.document} />;
            </div>
        </div>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const products = (await query.Product.findMany({
        query: 'id',
    })) as { id: string }[];
    const paths = products.filter(({ id }) => !!id).map(({ id }) => `/product/${id}`);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const product = (await query.Product.findOne({
        where: { id: params!.id as string },
        query: 'id name total price type { name } description { document } thumbnail { id publicUrl } images { id image { publicUrl } }',
    }))
    if (!product) {
        return { notFound: true };
    } else {
        product.images.unshift({
            id: product.thumbnail.id,
            image: {
                publicUrl: product.thumbnail.publicUrl
            }
        })
    }
    return { props: { product } };
}