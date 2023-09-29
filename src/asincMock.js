const product = [
    {
        id: '1',
        name: 'Mesa de manicuria',
        price: 74500,
        category: 'Muebles de manicuria',
        img: 'https://http2.mlstatic.com/D_NQ_NP_860376-MLA49314872857_032022-O.webp',
        stock: 25,
        description: 'descripcion de Mesa de manicuria'
    },
    
    {
        id: '2',
        name: 'Esmalte',
        price: 3500,
        category: 'Insumos',
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/181/664/rte/opi%20gel%20color.png',
        stock: 278,
        description: 'Consultar por catalogo de colores'
    },

    {
        id: '3', 
        name: 'Cabina UV led',
        price: 25000,
        category: 'Herramientas', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/181/664/products/opi-star-light-gl903-us-led-light-99350103830-elevated-right-9637_1a621f4f-ce86-49d4-aa8d-54998df7283b1-659a8985a3466f219716803698462109-640-0.webp',
        stock: 58,
        description:'Cabina uv led 112w',
    },

    {
        id:'4',
        name: 'Moldes para uñas esculpidas',
        price: '7040',
        category: 'Insumos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_649777-MLU70650328659_072023-O.webp',
        stock: '10000',
        description: 'El valor es por rollo de cien unidades',

    },

    {
        id:'5',
        name: 'Poligel Clear Color',
        price: '4799',
        category: 'Insumos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_975476-MLA71800459900_092023-O.webp',
        stock: '380',
        description: 'Poligel para construccion de uñas, consultar por colores',
    },

    {
        id: '6',
        name: 'Lampara',
        price: '64999',
        category: 'Herramientas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_677742-MLA71643367100_092023-F.webp',
        stock: '6',
        description:'el ARCO cuenta con 180° de conformado por 240 unidades de LED de Alta Luminosidad',
    },

]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)          
        }, 1100)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (product.find(prod => prod.id == id))
        }, 600)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
           resolve(product.filter(prod => prod.category == categoryId)) 
        },600 );
    })
}