import { list } from '@keystone-6/core';
import { relationship, timestamp } from '@keystone-6/core/fields';
import { cloudinaryImage } from '@keystone-6/cloudinary';

const cloudinaryInfo = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'error',
    apiKey: process.env.CLOUDINARY_API_KEY || 'error',
    apiSecret: process.env.CLOUDINARY_API_SECRET || 'error',
    folder: process.env.CLOUDINARY_API_FOLDER || 'error',
};

const ProductImage = list({
    fields: {
        image: cloudinaryImage({
            cloudinary: cloudinaryInfo
        }),
        product: relationship({
            ref: 'Product.images',
            many: false,
        }),
        createdAt: timestamp({
            defaultValue: { kind: "now" }
        }),
    },
})

export default ProductImage;