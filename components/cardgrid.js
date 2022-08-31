import ProductCard from "./productcard";

/*
    props: {
        expandSize,
        colNum,
        items: Product[]
    }
*/

const CardGrid = props => (
    <div className="container row">
        {props.items.map(item => (
            <div key={item.id} className={`col-${props.expandSize}-${Math.floor(12 / props.colNum)} p-3`}>
                <ProductCard key={item.id} href="/" thumbnailSrc={item.thumbnail.publicUrl} name={item.name} price={item.price} />
            </div>
        ))}
    </div>
)

export default CardGrid;