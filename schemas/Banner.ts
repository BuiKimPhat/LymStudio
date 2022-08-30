import { list } from '@keystone-6/core';
import { text, timestamp } from '@keystone-6/core/fields';
import { cloudinaryImage } from '@keystone-6/cloudinary';

const cloudinaryInfo = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'error',
  apiKey: process.env.CLOUDINARY_API_KEY || 'error',
  apiSecret: process.env.CLOUDINARY_API_SECRET || 'error',
  folder: process.env.CLOUDINARY_API_FOLDER || 'error',
};

const Banner = list({
  fields: {
    image: cloudinaryImage({
      cloudinary: cloudinaryInfo,
    }),
    url: text(),
    createdAt: timestamp({
      defaultValue: { kind: "now" }
    }),
  }
});
export default Banner;