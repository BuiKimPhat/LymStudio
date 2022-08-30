import { list } from '@keystone-6/core';
import { text, integer, bigInt, relationship, timestamp } from '@keystone-6/core/fields';
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
        total: integer(),
        description: document(),
        price: bigInt(),
        type: relationship({
            ref: 'ProductType.products',
            many: false,
        }),
        thumbnail: cloudinaryImage({
            cloudinary: cloudinaryInfo,
        }),
        images: relationship({
            ref: 'ProductImage.product',
            many: true
        }),
        createdAt: timestamp(),
    }
})

export default Product;