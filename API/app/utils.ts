//  { "code": "F0021",
//   "name": "Nike Air Max Excee 340",
//   "price": 1000,
//   "stock": 5,
//   "description": "description example",
//   "image": "any",
//   "state": true,
//   "categoryId": 1
//  }
export const roles = [
  {
    name: 'client',
    state: true
  },
  {
    name: 'admin',
    state: true 
  }
]

export const category = [
  {
    name: "camaras y lentes",
    description: "lorem ipsum",
    state: true,
  },
  {
    name: "accesorios",
    description: "lorem ipsum",
    state: true,
  },
  {
    name: "flashes e iluminacion",
    description: "lorem ipsum",
    state: true,
  },
  {
    name: "tripodes y soportes",
    description: "lorem ipsum",
    state: true,
  },
  {
    name: "audio y video",
    description: "lorem ipsum",
    state: true,
  },
];
// Camaras y Lentes  1
// Accesorios    2
// Flashes e Iluminacion  3
// Tripodes y Soportes  4
// Audio y Video  5
export const data = [
  {
    code: "F0021",
    name: "sony alfha 7",
    price: 1200000,
    stock: 50,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp",
    state: true,
    categoryId: 1,
    images: [
      {
        url_image:
          "https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp",
      },
      {
        url_image:
          "https://http2.mlstatic.com/D_NQ_NP_659258-MLA31993759099_082019-O.webp",
      },
      {
        url_image:
          "https://http2.mlstatic.com/D_NQ_NP_947144-MLA31993704191_082019-O.webp",
      },
      {
        url_image:
          "https://http2.mlstatic.com/D_NQ_NP_963878-MLA41501060481_042020-O.webp",
      }
    ],
    // properties: [
    //   {
    //     icon: 'icon',
    //     name: 'gola',
    //     value: 'valor de esto',
    //   }
    // ]
  },
  {
    code: "F027",
    name: "anon EOS Rebel Kit T7 + lente 18-55mm IS II DSLR color negro",
    price: 15000,
    stock: 30,
    description: ` 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    `,

    image:
      "https://http2.mlstatic.com/D_NQ_NP_822322-MLA48551234826_122021-O.webp",
    state: true,
    categoryId: 1,
    images: [
      {
        url_image:
          "https://http2.mlstatic.com/D_NQ_NP_822322-MLA48551234826_122021-O.webp",
      },
      {
        url_image:
          "https://http2.mlstatic.com/D_NQ_NP_822133-MLA48551234976_122021-O.webp",
      },
      {
        url_image:
          "https://http2.mlstatic.com/D_NQ_NP_607595-MLA48551234827_122021-O.webp",
      }
    ],
  },
  {
    code: "Peak",
    name: "Peak Design Tripode para viaje de aluminio CB-5-150-AL",
    price: 15000,
    stock: 2,
    description: ` 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    `,

    image: "https://www.digi-zoom.com.ar/images/productos/2182_1_z.jpg",
    state: true,
    categoryId: 4,
    images: [
      {
        url_image:
          "https://www.digi-zoom.com.ar/images/productos/2182_1_z.jpg",
      },
      {
        url_image:
          "https://www.digi-zoom.com.ar/images/productos/2182_2_z.jpg",
      },
    ],
    // https://www.digi-zoom.com.ar/productos_detalle.php?i=aXU5dlNlem5lU2VtckIvSFNHdktUaUhabFMvMW9pY1BUQ1MyWnBvVGJwYz0
  },
  // {
  //   code: "Pakd",
  //   name: "Vanguard VESTA 204AP",
  //   price: 18500,
  //   stock: 7,
  //   description: ` 
  //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,
  //   image: "https://www.digi-zoom.com.ar/images/productos/1751_1_z.jpg",
  //   state: true,
  //   categoryId: 4,
  //   images: [
  //     {
  //       url_image: 'https://www.digi-zoom.com.ar/images/productos/1751_1_z.jpg',
  //     },
  //     {
  //       url_image: 'https://www.digi-zoom.com.ar/images/productos/1751_5_z.jpg',
  //     },
  //     {
  //       url_image: 'https://www.digi-zoom.com.ar/images/productos/1751_4_z.jpg',
  //     }
  //   ]
  //   //https://www.digi-zoom.com.ar/productos_detalle.php?i=VU5vRGNYVEpOQmZZellSb011d3pPNlluMFdSRURpNVNFNEVxTDZLVVc3cz0
  // },
  // {
  //   code: "VGSO",
  //   name: "Vanguard VK 203 APM",
  //   price: 9700,
  //   stock: 5,
  //   description: ` 
  //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/1488_1_z.jpg",
  //   state: true,
  //   categoryId: 4,
  //   images: [
  //     { url_image: 'https://www.digi-zoom.com.ar/images/productos/1488_1_z.jpg' },
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/1488_3_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/1488_6_z.jpg'},
  //   ]
  // // https://www.digi-zoom.com.ar/productos_detalle.php?i=NjR3dGRIZTY1K05welpBSWhUS1RQNWdPWmZtd0ZObldIVkR0ckdkSU9kRT0
  // },
  // {
  //   code: "Pe4k",
  //   name: "Vanguard VEO 2 235 AB BLUE",
  //   price: 9700,
  //   stock: 1,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/1488_1_z.jpg",
  //   state: true,
  //   categoryId: 4,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/1489_1_z.jpg'},
  //     { url_image: 'https://www.digi-zoom.com.ar/images/productos/1489_6_z.jpg' },
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/1489_3_z.jpg'}
  //   ]
  //   //https://www.digi-zoom.com.ar/productos_detalle.php?i=Wlp6T0pqT04xN1B0bWd4SThESlZGZVVXT2VuWmpsQ1ViMnliRXFuZXNtMD0
  // },
  // {
  //   code: "db00",
  //   name: "Nikon SB-700 Flash",
  //   price: 100200,
  //   stock: 17,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/300_1_z.jpg",
  //   state: true,
  //   categoryId: 3,
  //   images: [
  //     { url_image: 'https://www.digi-zoom.com.ar/images/productos/300_1_z.jpg' },
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/300_3_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/300_2_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=N2dkSzVpWU5halo0RmJrNmFhUzdDRmdEMFZwRmtIWXNqc0kzRUNRTGRhcz0
  // },
  // {
  //   code: "MF12",
  //   name: "Godox MF12 Macro Flash",
  //   price: 43776,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/2283_1_z.jpg",
  //   state: true,
  //   categoryId: 3,
  //   images: [
  //     { url_image: 'https://www.digi-zoom.com.ar/images/productos/2283_1_z.jpg' },
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2283_2_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=cFZyb0lGbnUrNTA0MHFEVUo5TjZlTFFFTGNtQ2dWN3EyTk41MW5NM1B3MD0
  // },
  // {
  //   code: "Fuji",
  //   name: "Godox V1 Flash para Fuji",
  //   price: 43776,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/1916_1_z.jpg",
  //   state: true,
  //   categoryId: 3,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/1916_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/1916_3_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/1916_8_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=WDhjSUo2UzNiMTZzSUFDMy8zYkw2aGQ3amJnWHh1a3R4d2EvYUl5ZVpPaz0
  // },
  // {
  //   code: "goro",
  //   name: "Go Pro Soporte para tabla de bodyboard",
  //   price: 11000,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/640_1_z.jpg",
  //   state: true,
  //   categoryId: 2,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/640_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/640_2_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=NyttZzZYdFNTNnNVdXZXbXIzMFJLVWxQczVCQzF4SDNjbzVlc3FGM0FITT0
  // },
  // {
  //   code: "reel",
  //   name: "CANON EOS REBEL T7 / 1500D (18-55 MM) IMPORTACION PROPIA",
  //   price: 4999,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/2181_2_z.jpg",
  //   state: true,
  //   categoryId: 1,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2181_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2181_3_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2181_6_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=aEY5Z2RrZE84emtZK1NZckt3azZlTUpqNmJhRnE3VmRudHJTUmF2Q2dMOD0
  // },
  // {
  //   code: "na9d",
  //   name: "Canon EOS 90D Body Importacion Oficial",
  //   price: 4999,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/2199_1_z.jpg",
  //   state: true,
  //   categoryId: 1,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_2_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_6_z.jpg'}
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=V0cvcDg2MFNjbXBlZXNkck5VSjlSYUF1T1dmRmg5cEFaZUg0UVF3YXVVQT0
  // },
  // {
  //   code: "na9fd",
  //   name: "Canon EOS 5D Mark IV (24-105 mm IS USM) Importacion Oficial",
  //   price: 4999,
  //   stock: 6,
  //   description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/2197_1_z.jpg",
  //   state: true,
  //   categoryId: 1,
  //   images: [
  //     { url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_1_z.jpg' },
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_2_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_5_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=V0cvcDg2MFNjbXBlZXNkck5VSjlSYUF1T1dmRmg5cEFaZUg0UVF3YXVVQT0
  // },
  // {
  //   code: "SNCO",
  //   name: "SYNCO MICRÓFONO LAVALIER CON CABLE SY-S6R-LAV",
  //   price: 4999,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,
  //   image: "https://www.digi-zoom.com.ar/images/productos/2069_1_z.jpg",
  //   state: true,
  //   categoryId: 5,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2069_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2069_2_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2069_4_z.jpg'}
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=U0kwVTRQR2hXV2NQVWd5bDgvVlY5SHU3WVcxUkhCOTRnbThQd0dScWw1Yz0
  // },
  // {
  //   code: "SYe1",
  //   name: "Synco Micrófono de sonido en vivo SY-E10-MIC",
  //   price: 4999,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/2066_1_z.jpg",
  //   state: true,
  //   categoryId: 5,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2066_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2066_2_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2066_4_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=UU45SlFXcU5IaWw0OFdaTXJUOVFNYjc0eHpSdklzMFBxYVdxTE52V2Yzdz0

  // },
  // {
  //   code: "SYM",
  //   name: "Synco Kit de transmisión en vivo SY-M1P-Mic",
  //   price: 4999,
  //   stock: 6,
  //   description: ` 
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/2059_1_z.jpg",
  //   state: true,
  //   categoryId: 5, 
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2059_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2059_2_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2059_3_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=bUlkbk9wV1VEUVEzdWtRTG9rM2JBRDJoSmI0WTFpWkpYbkpyN2RCNlp0RT0

  // },
  // {
  //   code: "Gdox",
  //   name: "Godox Micrófono de escopeta compacto VD-Mic",
  //   price: 4999,
  //   stock: 16,
  //   description: `
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  //   `,

  //   image: "https://www.digi-zoom.com.ar/images/productos/2109_1_z.jpg",
  //   state: true,
  //   categoryId: 5,
  //   images: [
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2109_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2109_1_z.jpg'},
  //     {url_image: 'https://www.digi-zoom.com.ar/images/productos/2109_2_z.jpg'},
  //   ]
  //   // https://www.digi-zoom.com.ar/productos_detalle.php?i=RmFqTFBpMHk4RjM5WUNibzBKTkFaRVRHR3FZbVVaTlZpbWdWNkpVVnZlOD0
  // }
];


export const usersData = [
  {
    name: 'tomas 1',
    lastName: 'apellido 1',
    imageProfile: 'https://thumbs.dreamstime.com/z/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg',
    mail: 'tomas@gmail.com',
    password: 'tomas123',
    phone: 11232323,
    birthday: 23,
    state: true,
    roleId: 1,
    userName: 'TomasUser'
  },
  {
    name: 'flor 1',
    lastName: 'flor apellido 1',
    imageProfile: 'https://thumbs.dreamstime.com/z/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg',
    mail: 'flor@gmail.com',
    password: 'flor123',
    phone: 3213123,
    birthday: 123,
    state: true,
    roleId: 1,
    userName: 'FlorUser'
  },
  {
    name: 'leo',
    lastName: 'messi',
    imageProfile: 'https://thumbs.dreamstime.com/z/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg',
    mail: 'messi@gmail.com',
    password: 'messi123',
    phone: 234312,
    birthday: 32,
    state: true,
    roleId: 2,
    userName: 'leoMessi'
  },
]