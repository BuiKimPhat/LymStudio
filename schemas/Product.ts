import { list } from '@keystone-6/core';
import { text, integer, relationship, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { cloudinaryImage } from '@keystone-6/cloudinary';

const cloudinaryInfo = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'error',
    apiKey: process.env.CLOUDINARY_API_KEY || 'error',
    apiSecret: process.env.CLOUDINARY_API_SECRET || 'error',
    folder: process.env.CLOUDINARY_API_FOLDER || 'error',
};

const Product = list({
    fields: {
        name: text(),
        total: integer({
            validation: {
                isRequired: true,
            },
        }),
        description: document({
            formatting: true,
            dividers: true,
            links: true,
            layouts: [
                [1, 1],
                [1, 1, 1],
            ],
        }),
        price: integer({
            validation: {
                isRequired: true,
            },
        }),
        type: relationship({
            ref: 'ProductType.products',
            many: false,
        }),
        thumbnail: cloudinaryImage({
            cloudinary: cloudinaryInfo,
        }),
        images: relationship({
            ref: 'ProductImage.product',
            many: true,
        }),
        createdAt: timestamp({
            defaultValue: { kind: "now" }
        }),
    }
})

export default Product;