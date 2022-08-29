import { list } from '@keystone-6/core';
import { text, password, checkbox } from '@keystone-6/core/fields';

const User = list({
    fields: {
      name: text(),
      email: text({ isIndexed: 'unique' }),
      password: password(),
      isAdmin: checkbox(),
    },
  })

export default User;