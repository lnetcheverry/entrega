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
    {id: '2', name: 'Esmalte', price: 3500, category: 'Insumos', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/181/664/rte/opi%20gel%20color.png'},
    {id: '3', name: 'Cabina UV led', price: 25000, category: 'Herramientas', img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/181/664/products/opi-star-light-gl903-us-led-light-99350103830-elevated-right-9637_1a621f4f-ce86-49d4-aa8d-54998df7283b1-659a8985a3466f219716803698462109-640-0.webp'},
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