const foodsI = [
    { 
        id: '1',
        description: 'Deliciosa hamburguesa.',
        category: 'Comida rápida',
        quantity: '20',
        product: 'Hamburguesa',
        price: 20000,
        image: './images/Hamburguesa.webp', 
        quantityCart: 0
    },
    { 
        id: '2',
        description: 'Pizza con una variedad de ingredientes.',
        category: 'Comida italiana',
        quantity: '8',
        product: 'Pizza',
        price: 15000,
        image: './images/Pizza.jpg',
        quantityCart: 0
    },
    { 
        id: '3',
        description: 'Perrito caliente con salchicha.',
        category: 'Comida rápida',
        quantity: '17',
        product: 'Perrito Caliente',
        price: 12000,
        image: './images/PerritoCaliente.avif', 
        quantityCart: 0
    },
    { 
        id: '4',
        description: 'Pollo frito crujiente.',
        category: 'Comida rápida',
        quantity: '30',
        product: 'Pollo Frito',
        price: 18000,
        image: './images/PolloFrito.jpg',
        quantityCart: 0
    },
    { 
        id: '5',
        description: 'Tacos sabrosos con carne y guarniciones.',
        category: 'Comida mexicana',
        quantity: '15',
        product: 'Tacos',
        price: 14000,
        image: './images/Tacos.jpg',
        quantityCart: 0
    },
    { 
        id: '6',
        description: 'Sushi fresco y variado.',
        category: 'Comida japonesa',
        quantity: '10',
        product: 'Sushi',
        price: 25000,
        image: './images/Sushi.jpg', 
        quantityCart: 0
    },
    { 
        id: '7',
        description: 'Hot dog con salchicha y aderezos.',
        category: 'Comida rápida',
        quantity: '25',
        product: 'Hot Dog',
        price: 10000,
        image: './images/PerritoCaliente.avif',
        quantityCart: 0
    },
    { 
        id: '8',
        description: 'Papas fritas crujientes y doradas.',
        category: 'Acompañamiento',
        quantity: '12',
        product: 'Papas Fritas',
        price: 8000,
        image: './images/PapasFritas.jpeg',
        quantityCart: 0
    },
    { 
        id: '9',
        description: 'Ensalada César fresca con aderezo.',
        category: 'Ensaladas',
        quantity: '7',
        product: 'Ensalada César',
        price: 16000,
        image: './images/EnsaladaCesar.jpg', 
        quantityCart: 0
    },
    { 
        id: '10',
        description: 'Burrito relleno con carne y frijoles.',
        category: 'Comida mexicana',
        quantity: '12',
        product: 'Burrito',
        price: 17000,
        image: './images/Burrito.jpg',
        quantityCart: 0
    },
    { 
        id: '11',
        description: 'Donas glaseadas y dulces.',
        category: 'Postre',
        quantity: '30',
        product: 'Donas',
        price: 6000,
        image: './images/Donas.jpeg', 
        quantityCart: 0
    },

    { 
        id: '12',
        description: 'Delicioso helado con diferentes sabores.',
        category: 'Postre',
        quantity: '25',
        product: 'Helado',
        price: 12000,
        image: './images/helado.jpg', 
        quantityCart: 0
    },
    { 
        id: '13',
        description: 'Burritos de sushi variados y frescos.',
        category: 'Comida japonesa',
        quantity: '15',
        product: 'Sushi Burrito',
        price: 20000,
        image: './images/sushi-burrito.jpg', 
        quantityCart: 0
    },
    { 
        id: '14',
        description: 'Pasta italiana con salsa de tomate y albóndigas.',
        category: 'Comida italiana',
        quantity: '10',
        product: 'Spaghetti',
        price: 16000,
        image: './images/Spaghetti.jpg', 
        quantityCart: 0
    },
    { 
        id: '15',
        description: 'Sandwich clásico con jamón y queso.',
        category: 'Comida rápida',
        quantity: '20',
        product: 'Sandwich',
        price: 10000,
        image: './images/Sandwich.jpg', 
        quantityCart: 0
    },
    { 
        id: '16',
        description: 'Pastel de chocolate suave y esponjoso.',
        category: 'Postre',
        quantity: '8',
        product: 'Pastel de Chocolate',
        price: 18000,
        image: './images/PastelChocolate.jpg', 
        quantityCart: 0
    },
    { 
        id: '17',
        description: 'Tarta de frutas frescas y crujiente.',
        category: 'Postre',
        quantity: '12',
        product: 'Tarta de Frutas',
        price: 15000,
        image: './images/TartaFrutas.jpg', 
        quantityCart: 0
    },
    { 
        id: '18',
        description: 'Café caliente y aromático.',
        category: 'Bebidas',
        quantity: '30',
        product: 'Café',
        price: 5000,
        image: './images/Cafe.jpg', 
        quantityCart: 0
    },
    { 
        id: '19',
        description: 'Zumo de naranja natural y refrescante.',
        category: 'Bebidas',
        quantity: '25',
        product: 'Zumo de Naranja',
        price: 7000,
        image: './images/ZumoNaranja.jpg', 
        quantityCart: 0
    },
    { 
        id: '20',
        description: 'Hamburguesa vegetariana con ingredientes frescos.',
        category: 'Comida rápida',
        quantity: '15',
        product: 'Hamburguesa Vegetariana',
        price: 22000,
        image: './images/HamburguesaVegetariana.jpg', 
        quantityCart: 0
    },
    { 
        id: '21',
        description: 'Rolls de canela recién horneados.',
        category: 'Postre',
        quantity: '18',
        product: 'Rolls de Canela',
        price: 13000,
        image: './images/RollsCanela.jpg', 
        quantityCart: 0
    },
    { 
        id: '22',
        description: 'Sopa de tomate caliente y reconfortante.',
        category: 'Sopas',
        quantity: '10',
        product: 'Sopa de Tomate',
        price: 9000,
        image: './images/SopaTomate.jpg', 
        quantityCart: 0
    },
    { 
        id: '23',
        description: 'Ensalada de frutas frescas y saludables.',
        category: 'Ensaladas',
        quantity: '15',
        product: 'Ensalada de Frutas',
        price: 12000,
        image: './images/EnsaladaFrutas.jpg', 
        quantityCart: 0
    },
    { 
        id: '24',
        description: 'Alitas de pollo picantes y crujientes.',
        category: 'Comida rápida',
        quantity: '22',
        product: 'Alitas de Pollo',
        price: 17000,
        image: './images/AlitasPollo.jpg', 
        quantityCart: 0
    },
    { 
        id: '25',
        description: 'Té verde caliente y relajante.',
        category: 'Bebidas',
        quantity: '28',
        product: 'Té Verde',
        price: 6000,
        image: './images/TeVerde.jpg', 
        quantityCart: 0
    },
    { 
        id: '26',
        description: 'Huevos revueltos con tocino y tostadas.',
        category: 'Desayuno',
        quantity: '18',
        product: 'Desayuno Americano',
        price: 12000,
        image: './images/DesayunoAmericano.jpg', 
        quantityCart: 0
    },
    { 
        id: '27',
        description: 'Tacos de pescado fresco y salsas variadas.',
        category: 'Comida mexicana',
        quantity: '14',
        product: 'Tacos de Pescado',
        price: 19000,
        image: './images/TacosPescado.jpg', 
        quantityCart: 0
    },
    { 
        id: '28',
        description: 'Cupcakes decorados y deliciosos.',
        category: 'Postre',
        quantity: '20',
        product: 'Cupcakes',
        price: 11000,
        image: './images/Cupcakes.jpg', 
        quantityCart: 0
    },
    { 
        id: '29',
        description: 'Wrap de pollo con vegetales frescos.',
        category: 'Comida rápida',
        quantity: '16',
        product: 'Wrap de Pollo',
        price: 15000,
        image: './images/WrapPollo.jpg', 
        quantityCart: 0
    },
    { 
        id: '30',
        description: 'Panqueques con sirope y frutas.',
        category: 'Desayuno',
        quantity: '25',
        product: 'Panqueques',
        price: 10000,
        image: './images/Panqueques.jpg', 
        quantityCart: 0
    }
];
