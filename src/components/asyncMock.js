const products = [
    {
      id: 1,
      title: 'Perfume01',
      price: '1000',
      stock: '10',
      category: 'Hombres',
      description: 'Clasificacion: colonia,eau de parfum',
      image:
        'https://pcdesignperfumes.com/wp-content/uploads/2020/07/05-0243-00-00-150x150.jpg',
    },
    {
      id: 2,
      title: 'Perfume02',
      price: '2000',
      stock: '5',
      category: 'Mujer',
      description: ' eau de toilette, colonia',
      image:
        'https://puntoaroma.com.ar/wp-content/uploads/2021/11/Perfume-501-ock-150x150.jpg',
    },
    {
      id: 3,
      title: 'Perfume03',
      price: '3000',
      stock: '7',
      category: 'Hombres',
      description: 'Perfume Amaderado eau de parfum, eau de toilette',
      image:
        'https://www.aromasyrecuerdos.com/wp-content/uploads/2022/10/SCANDAL-POUR-HOMME-EDT-Jean-Paul-Gaultier-150x150.jpg',
    },
  ];

  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };