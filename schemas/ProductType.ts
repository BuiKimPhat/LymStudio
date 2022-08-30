import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const ProductType = list({
    fields: {
        name: text(),
        products: relationship({
            ref: 'Product.type',
            many: true,
        }),
        createdAt: timestamp(),
    },
})

export default ProductType;