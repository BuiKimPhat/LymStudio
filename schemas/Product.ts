import { list } from '@keystone-6/core';
import { text, integer, select } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

const Product = list({
    fields: {
        name: text(),
        total: integer(),
        description: document(),
        // type: select({
        //     type: 'enum',
        //     options: [
        //       { label: '...', value: '...' },
        //       /* ... */
        //     ],
        //     defaultValue: '...',
        //     db: { map: 'my_select' },
        //     validation: { isRequired: true, },
        //     isIndexed: 'unique',
        //     ui: { displayMode: 'select' },
        //   }),
    }
})

export default Product;