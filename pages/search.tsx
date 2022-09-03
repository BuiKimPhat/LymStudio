import CardGrid from '../components/cardgrid'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { request, gql } from 'graphql-request'

type Product = {
    id: string,
    name: string,
    price: number,
    thumbnail: {
        publicUrl: string,
    }
}

export default function Search() {
    const router = useRouter();
    // const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        // setSearch(router.query.q?.toString()!!);
        const query = gql`
        {
            products(
                orderBy: {
                    createdAt: desc,
                },
                where: {
                    name: { contains: "${router.query.q}" },
                }) {
                    id,
                    name,
                    price,
                    thumbnail {
                        publicUrl
                    }
                }
        }
        `;
        console.log(query);
        request("/api/graphql", query).then((data) => {
            setProducts(data.products);
            setLoading(false);
        });
    }, [router.query]);
    return (
        <div>
            {isLoading ? (
                <div className='container text-center m-5'>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <>
                    <div className='container'>
                        <h4 className="text-divider"><span>
                            Kết quả tìm kiếm cho: <b>{router.query.q}</b>
                        </span></h4>
                    </div>
                    <CardGrid expandSize="sm" colNum="4" items={products} />
                </>
            )}
        </div>
    );
}