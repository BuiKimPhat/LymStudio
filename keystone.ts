import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import User from './schemas/User'
import Banner from './schemas/Banner'
import Product from './schemas/Product'
import ProductType from './schemas/ProductType'
import ProductImage from './schemas/ProductImage'

require('dotenv').config()

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'isAdmin',
});
const session = statelessSessions({
  secret: process.env.SESSION_COOKIES_SECRET || "__lymstudiosecret____lymstudiosecret__",
});

const lists = {
  User, Banner, Product, ProductType, ProductImage
}

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: process.env.DATABASE_URL || 'file:./app.db'
    },
    experimental: {
      generateNextGraphqlAPI: true,
      generateNodeAPI: true,
    },
    lists,
    session
  })
);