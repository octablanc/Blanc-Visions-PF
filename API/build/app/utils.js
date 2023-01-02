"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenBuyArray = exports.usersData = exports.data = exports.category = exports.roles = void 0;
//  { "code": "F0021",
//   "name": "Nike Air Max Excee 340",
//   "price": 1000,
//   "stock": 5,
//   "description": "description example",
//   "image": "any",
//   "state": true,
//   "categoryId": 1
//  }
exports.roles = [
    {
        name: 'client',
        state: true,
    },
    {
        name: 'admin',
        state: true,
    },
];
exports.category = [
    {
        name: 'camaras y lentes',
        description: 'lorem ipsum',
        state: true,
    },
    {
        name: 'accesorios',
        description: 'lorem ipsum',
        state: true,
    },
    {
        name: 'flashes e iluminacion',
        description: 'lorem ipsum',
        state: true,
    },
    {
        name: 'tripodes y soportes',
        description: 'lorem ipsum',
        state: true,
    },
    {
        name: 'audio y video',
        description: 'lorem ipsum',
        state: true,
    },
];
// Camaras y Lentes  1
// Accesorios    2
// Flashes e Iluminacion  3
// Tripodes y Soportes  4
// Audio y Video  5
exports.data = [
    {
        ratings: [{
                score: 1,
                commentary: 'primer cometario jejejeje',
            }],
        code: 'F0021',
        name: 'Sony alfha 7',
        price: 100,
        stock: 50,
        description: `Combinando un diseño elegante con capacidades esenciales, la Sony alpha 7 es una DSLR capaz adecuada tanto para tomar fotos como para grabar videos. El diseño probado del sensor de 18MP ofrece una calidad de imagen y una sensibilidad impresionantes, junto con un disparo continuo de 3 fps y una grabación de video de hasta Full HD 30p.`,
        image: 'https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp',
        state: true,
        categoryId: 1,
        discount: 0,
        images: [
            {
                url_image: 'https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp',
            },
            {
                url_image: 'https://http2.mlstatic.com/D_NQ_NP_659258-MLA31993759099_082019-O.webp',
            },
            {
                url_image: 'https://http2.mlstatic.com/D_NQ_NP_947144-MLA31993704191_082019-O.webp',
            },
            {
                url_image: 'https://http2.mlstatic.com/D_NQ_NP_963878-MLA41501060481_042020-O.webp',
            },
        ],
        properties: [
            {
                name: 'clave',
                value: 'valor del prop',
            },
            {
                name: 'clave',
                value: 'valor del prop',
            },
            {
                name: 'clave',
                value: 'valor del prop',
            },
            {
                name: 'clave',
                value: 'valor del prop',
            },
        ],
    },
    {
        code: 'F027',
        name: 'Canon eos rebel kit T7',
        price: 15000,
        stock: 30,
        description: ` 
    En el corazón de la Rebel T100 se encuentra un sensor CMOS APS-C de 18MP, que se combina con el procesamiento DIGIC para proporcionar velocidad y calidad de imagen para fotografías y videos. Para fotografiar sujetos en movimiento, es posible realizar disparos continuos de hasta 3 fps para JPEG ilimitados en una ráfaga o hasta 6 fotogramas sin procesar consecutivos.
    `,
        image: 'https://http2.mlstatic.com/D_NQ_NP_822322-MLA48551234826_122021-O.webp',
        state: true,
        categoryId: 1,
        discount: 0,
        images: [
            {
                url_image: 'https://http2.mlstatic.com/D_NQ_NP_822322-MLA48551234826_122021-O.webp',
            },
            {
                url_image: 'https://http2.mlstatic.com/D_NQ_NP_822133-MLA48551234976_122021-O.webp',
            },
            {
                url_image: 'https://http2.mlstatic.com/D_NQ_NP_607595-MLA48551234827_122021-O.webp',
            },
        ],
        properties: [
            {
                name: 'clave',
                value: 'valor del prop',
            },
            {
                name: 'clave',
                value: 'valor del prop',
            },
            {
                name: 'clave',
                value: 'valor del prop',
            },
            {
                name: 'clave',
                value: 'valor del prop',
            },
        ],
    },
    {
        code: 'Peak',
        name: 'Peak design tripode',
        price: 15000,
        stock: 2,
        description: `Los fotógrafos que busquen un trípode bellamente diseñado con una gran relación resistencia / tamaño y peso apreciarán el trípode de viaje de aluminio de Peak Design. De inspiración arquitectónica y con un peso de solo 3.4 libras, este innovador trípode reduce el volumen plegado gracias a las patas que se almacenan más juntas que los trípodes tradicionales.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2182_1_z.jpg',
        state: true,
        categoryId: 4,
        discount: 20,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2182_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2182_2_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Capacidad de carga:',
                value: '20 lb / 9.07 kg',
            },
            {
                name: 'Altura máxima:',
                value: ' 60 / 152.4 cm',
            },
            {
                name: 'Secciones de pierna:',
                value: '5',
            },
            {
                name: 'peso',
                value: '3.4 lb / 1.54 kg',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=aXU5dlNlem5lU2VtckIvSFNHdktUaUhabFMvMW9pY1BUQ1MyWnBvVGJwYz0
    },
    {
        code: 'Pakd',
        name: 'Vanguard vesta 204AP',
        price: 18500,
        stock: 7,
        description: `El kit de trípode de aluminio de 4 secciones VESTA 204AP utiliza una rótula ergonómica PH-23 fluida y un sistema bloqueo de patas de clip fácil y rápido de ajustar. Cree imágenes atractivas conectando fácilmente su equipo con la zapata rápida Vanguard QS-29 y desconecte rápidamente su equipo con el sistema de liberación rápida. Suba, baje y realice ajustes precisos a cualquier altura.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1751_1_z.jpg',
        state: true,
        categoryId: 4,
        discount: 10,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1751_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1751_5_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1751_4_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Capacidad de carga:',
                value: '7.7 lb / 3.49 kg',
            },
            {
                name: 'Altura Máxima:',
                value: '60.5 / 153.7 cm',
            },
            {
                name: 'Altura Minima:',
                value: ' 19.4 / 49.3 cm',
            },
            {
                name: 'Largo Plegado:',
                value: '20.5 / 52.07 cm',
            },
        ],
        //https://www.digi-zoom.com.ar/productos_detalle.php?i=VU5vRGNYVEpOQmZZellSb011d3pPNlluMFdSRURpNVNFNEVxTDZLVVc3cz0
    },
    {
        code: 'VGSO',
        name: 'Vanguard vk 203 APM',
        price: 9700,
        stock: 5,
        description: `Es una serie simple de trípodes de aluminio con un diseño compacto y elegante. Diseñado para principiantes, es simple e intuitivo de operar. Pueden arreglar fácilmente los pies con un tipo de bloqueo de palanca, operación difícil no es necesaria. Además, dado que puede estirarse a la altura de la línea del ojo en el estado más extendido, puedes usarla con casi todas las cámaras útiles, incluso si no disparas mientras te agachas con un pequeño trípode.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1488_1_z.jpg',
        state: true,
        categoryId: 4,
        discount: 30,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1488_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1488_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1488_6_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Diseño:',
                value: 'simple, estable y ligero',
            },
            {
                name: 'Cerraduras de pierna:',
                value: 'Quick Flip',
            },
            {
                name: 'Pierna de aluminio:',
                value: ' 20 mm (Top 20,17,14,11)',
            },
            {
                name: 'Columna:',
                value: 'central con engranaje VK',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=NjR3dGRIZTY1K05welpBSWhUS1RQNWdPWmZtd0ZObldIVkR0ckdkSU9kRT0
    },
    {
        code: 'Pe4k',
        name: 'Vanguard veo 2 235',
        price: 9700,
        stock: 1,
        description: `Intuitivo y sencillo de colocar el trípode en la posición deseada: Exclusivo e innovador sistema de columna central que permite configurar la columna central y las patas del trípode en menos de 15 segundos.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1488_1_z.jpg',
        state: true,
        categoryId: 4,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1489_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1489_6_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1489_3_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Capacidad de carga:',
                value: '13.2 lb / 6 kg',
            },
            {
                name: 'Altura máxima:',
                value: '57.1 / 145 cm',
            },
            {
                name: 'Altura mínima:',
                value: '7 / 17.8 cm',
            },
            {
                name: 'Secciones de pierna:',
                value: '5, Flip Locks',
            },
        ],
        //https://www.digi-zoom.com.ar/productos_detalle.php?i=Wlp6T0pqT04xN1B0bWd4SThESlZGZVVXT2VuWmpsQ1ViMnliRXFuZXNtMD0
    },
    {
        code: 'db00',
        name: 'Nikon sb-700 flash',
        price: 100200,
        stock: 17,
        description: `Unidad Speedlight portátil y versátil i-TTL Speedlight - Optimizada para usar con el Sistema de Iluminación Creativa (Creative Lighting System, CLS) de Nikon.
`,
        image: 'https://www.digi-zoom.com.ar/images/productos/300_1_z.jpg',
        state: true,
        categoryId: 3,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/300_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/300_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/300_2_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Rango de zoom:',
                value: '24-120 mm (12 mm con panel)',
            },
            {
                name: 'Tiempo de reciclaje:',
                value: '2.5-3.5 segundos',
            },
            {
                name: 'Inclina:',
                value: 'desde -7° a 90°',
            },
            {
                name: 'Funciona con:',
                value: '4 pilas AA',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=N2dkSzVpWU5halo0RmJrNmFhUzdDRmdEMFZwRmtIWXNqc0kzRUNRTGRhcz0
    },
    {
        code: 'MF12',
        name: 'Godox mf12 macro flash',
        price: 43776,
        stock: 6,
        description: `Diseñado para fotografía de primeros planos, el flash macro MF12 de Godox facilita la fotografía macro. Este cabezal de flash le permite tomar fotografías hermosas y nítidas de sujetos pequeños como plantas, animales e insectos a una distancia extremadamente cercana.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2283_1_z.jpg',
        state: true,
        categoryId: 3,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2283_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2283_2_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Relación de potencia:',
                value: '1/128 - 1/1',
            },
            {
                name: 'Tiempo de reciclaje:',
                value: '0,01 a 1,7 segundos',
            },
            {
                name: 'Incluidos:',
                value: 'Portafiltros y juego de filtros ',
            },
            {
                name: 'Funciona en frecuencias',
                value: 'de 2,4 GHz',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=cFZyb0lGbnUrNTA0MHFEVUo5TjZlTFFFTGNtQ2dWN3EyTk41MW5NM1B3MD0
    },
    {
        code: 'Fuji',
        name: 'Godox v1 flash para fuji',
        price: 43776,
        stock: 6,
        description: `Compatible con Sony ADI / P-TTL, esta luz flexible en la cámara se distingue por su cabeza redonda, que proporciona una luz suave y lisa con una caída gradual que aumenta la salida favorecedora.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1916_1_z.jpg',
        state: true,
        categoryId: 3,
        discount: 10,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1916_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1916_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1916_8_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Inclinacion:',
                value: ' -7 a 120 ° ',
            },
            {
                name: 'Sincronizacion:',
                value: 'alta velocidad de hasta 1/8000 segundos',
            },
            {
                name: 'Incluye:',
                value: ' una lámpara de ayuda AF, una lámpara de modelado LED 3200K y un puerto de 2.5 mm para activación por cable.',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=WDhjSUo2UzNiMTZzSUFDMy8zYkw2aGQ3amJnWHh1a3R4d2EvYUl5ZVpPaz0
    },
    {
        code: 'goro',
        name: 'Go pro soporte',
        price: 11000,
        stock: 6,
        description: `Monta la GoPro en tu tabla de bodyboard, tu tabla de surf soft-top, tu tabla de surf de espuma o tu paddle surf para capturar tu sesión desde el tubo hasta la playa. Graba metraje POV envolvente o dirige la cámara de nuevo hacia ti para capturar autorretratos mientras haces surf o paddle surf.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/640_1_z.jpg',
        state: true,
        categoryId: 2,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/640_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/640_2_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Compatible :',
                value: 'tablas de 3,8 cm a 8,8 cm de grosor',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=NyttZzZYdFNTNnNVdXZXbXIzMFJLVWxQczVCQzF4SDNjbzVlc3FGM0FITT0
    },
    {
        code: 'reel',
        name: 'Kodac flo r12',
        price: 4999,
        stock: 6,
        description: `Sensor CMOS APS-C de 24.1MP y procesador de imagen DIGIC 4+ En el corazón del Rebel T7 se encuentra un sensor APS-C CMOS de 24.1MP y un procesador de imagen DIGIC 4+, que se combinan para proporcionar tanto velocidad en todo el sistema de la cámara como una calidad de imagen notable.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2181_2_z.jpg',
        state: true,
        categoryId: 1,
        discount: 15,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2181_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2181_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2181_6_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Sensor: ',
                value: 'CMOS APS-C de 24.1MP',
            },
            {
                name: 'Monitor:',
                value: 'LCD 3.0 de 920k-puntos',
            },
            {
                name: 'Disparo:',
                value: ' hasta 3 fps',
            },
            {
                name: 'Filtros:',
                value: 'creativos y modos automáticos creativos',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=aEY5Z2RrZE84emtZK1NZckt3azZlTUpqNmJhRnE3VmRudHJTUmF2Q2dMOD0
    },
    {
        code: 'na9d',
        name: 'Canon marc',
        price: 4999,
        stock: 6,
        description: `Desde el momento en el que la luz pasa a través del objetivo, la EOS 5D Mark IV capta cada matiz, color y detalle. Una vez más, Canon ha introducido más detalle en cada dimensión gracias a un nuevo sensor capaz de una claridad extraordinaria`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2199_1_z.jpg',
        state: true,
        categoryId: 1,
        discount: 5,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_6_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Procesador de imagen',
                value: 'DIGIC 6+',
            },
            {
                name: 'Monitor: ',
                value: ' LCD de pantalla táctil 3.2 1.62m-Dot',
            },
            {
                name: 'Lente',
                value: 'EF 24-105mm f / 4L IS II USM',
            },
            {
                name: 'Sensor',
                value: 'CMOS Full-frame de 30.4MP',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=V0cvcDg2MFNjbXBlZXNkck5VSjlSYUF1T1dmRmg5cEFaZUg0UVF3YXVVQT0
    },
    {
        code: 'na9fd',
        name: 'Canon iv',
        price: 4999,
        stock: 6,
        description: `La EOS 5D Mark IV incluye un sistema de enfoque avanzado y medición que capta y realiza un seguimiento de cada momento en cuanto se produce, incluso con una iluminación difícil.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2197_1_z.jpg',
        state: true,
        categoryId: 1,
        discount: 20,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2197_5_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Disparo:',
                value: ' 7 fps',
            },
            {
                name: 'Sensor:',
                value: ' CMOS Full-frame de 30.4MP',
            },
            {
                name: 'Video:',
                value: 'DCI 4K a 30 fps; 8.8MP',
            },
            {
                name: 'Lente:',
                value: ' EF 24-105mm f / 4L IS II USM',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=V0cvcDg2MFNjbXBlZXNkck5VSjlSYUF1T1dmRmg5cEFaZUg0UVF3YXVVQT0
    },
    {
        code: 'SNCO',
        name: 'Sinco microfono liver',
        price: 4999,
        stock: 6,
        description: `SYNCO Lav-S6R es un micrófono lavalier XLR omnidireccional, con alta sensibilidad y bajo ruido propio para capturar un sonido natural claro. Funciona con cámaras, videocámaras, grabadoras de audio y mezcladores`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2069_1_z.jpg',
        state: true,
        categoryId: 5,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2069_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2069_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2069_4_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Sensibilidad:',
                value: '-30dB ± 1dB 0dB = 1V / Pa, 1KHz',
            },
            {
                name: 'Cable de audio:',
                value: ' 6 m / 19,7 pies',
            },
            {
                name: 'Conector de salida',
                value: 'XLRM de 3 pines',
            },
            {
                name: 'Señal / ruido:',
                value: ' ≥70dB',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=U0kwVTRQR2hXV2NQVWd5bDgvVlY5SHU3WVcxUkhCOTRnbThQd0dScWw1Yz0
    },
    {
        code: 'SYe1',
        name: 'synco micrófono de sonido',
        price: 4999,
        stock: 6,
        description: `El Synco Mic-E10 es un micrófono diseñado para voces e instrumentos. Ofrece un patrón polar cardioide para minimizar la captación fuera del eje, así como un cuerpo de aleación de aluminio que minimiza la interferencia eléctrica`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2066_1_z.jpg',
        state: true,
        categoryId: 5,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2066_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2066_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2066_4_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Respuesta de frecuencia:',
                value: ' de 50 Hz a 18 kHz',
            },
            {
                name: 'Batería: ',
                value: 'AA o 48V Phantom Powered',
            },
            {
                name: 'Incluye:',
                value: 'Cable XLR a 3,5 mm',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=UU45SlFXcU5IaWw0OFdaTXJUOVFNYjc0eHpSdklzMFBxYVdxTE52V2Yzdz0
    },
    {
        code: 'SYM',
        name: 'synco kit de transmisión en vivo SY-M1P-Mic',
        price: 4999,
        stock: 6,
        description: `Equipado con cables para usar con cámaras y dispositivos móviles, el micrófono ultracompacto de cañón de montaje en cámara Synco Mic-M1 ofrece una direccionalidad mejorada en comparación con el micrófono integrado de su dispositivo para una mejor captura de sus sujetos en disparos`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2059_1_z.jpg',
        state: true,
        categoryId: 5,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2059_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2059_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2059_3_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Conector de salida: ',
                value: 'TRS de 3,5 mm',
            },
            {
                name: 'Incluye:',
                value: 'manguito y parabrisas',
            },
            {
                name: 'Operaciones:',
                value: 'simple sin controles',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=bUlkbk9wV1VEUVEzdWtRTG9rM2JBRDJoSmI0WTFpWkpYbkpyN2RCNlp0RT0
    },
    {
        code: 'Gdox',
        name: 'godox microfono de escopeta compacto VD-Mic',
        price: 4999,
        stock: 16,
        description: `
    Para vloggers, livestreamers, videógrafos y periodistas móviles que necesitan un micrófono que ahorre espacio y que proporcione una captura de sonido de mayor calidad que el micrófono integrado de su dispositivo, el micrófono tipo escopeta Godox VD-Mic para montaje en cámara ofrece una solución ultracompacta y asequible`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2109_1_z.jpg',
        state: true,
        categoryId: 5,
        discount: 10,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2109_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2109_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2109_2_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Conector de salida: ',
                value: 'TRS de 3,5 mm',
            },
            {
                name: 'Cables:',
                value: 'TRS y TRRS en espiral desmontables',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=RmFqTFBpMHk4RjM5WUNibzBKTkFaRVRHR3FZbVVaTlZpbWdWNkpVVnZlOD0
    },
    //****************************************************************************** */
    {
        code: 'EF50USM',
        name: 'canon ef 50mm f/1.4 USM',
        price: 272220,
        stock: 5,
        description: `
  Ofreciendo una perspectiva natural junto con una apertura máxima rápida, el EF 50 mm f / 1.4 USM de Canon tiene una longitud normal versátil que se caracteriza por su brillante apertura f / 1.4 para adaptarse al trabajo en condiciones de poca luz y para producir poca profundidad de campo imágenes. Esta lente también presenta un diseño de óptica gaussiana, junto con dos elementos de alto índice de refracción y un elemento asférico, para controlar las aberraciones esféricas y la distorsión para obtener una gran nitidez y claridad.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2116_1_z.jpg',
        state: true,
        categoryId: 1,
        discount: 10,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2116_1_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2116_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2116_3_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Rango de apertura: ',
                value: 'f / 1.4 a f / 22',
            },
            {
                name: 'Distancia mínima de enfoque: ',
                value: '45 cm.',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=SDZGdlhkbjZTR2xXOGNHRE91NlFTaERoSUorT012dGtzOFhORW1jbFRBaz0
    },
    {
        code: 'AF508D',
        name: 'nikon af 50mm f/1.8 D',
        price: 53670,
        stock: 9,
        description: `
  Una lente sumamente ligera que ofrece la abertura f/1.8 más económica (en comparación con el 50mm f/1.4 D), pero conservando las grandes ventajas de la tecnología de distancia D. Ideal para paisajes o retratos de cuerpo entero. Sólo pesa 0,34 libras, lo que es ideal para los viajes, mientras que todavía ofrece excelentes propiedades de baja captación de luz. Detiene hasta f/22 para el control de la maravillosa profundidad de campo. Acepta filtros de 52 mm y HR-2 parasol.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/195_1_z.jpg',
        state: true,
        categoryId: 1,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/195_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/195_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/195_4_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Rango de apertura: ',
                value: 'f / 1.8 a f / 22',
            },
            {
                name: 'Distancia mínima de enfoque: ',
                value: '18 cm.',
            },
            {
                name: 'Diámetro del filtro: ',
                value: '52 mm.',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=TzB1MVJGbzFpazU1R0l1eFhNbW96Mng1Zzd4NFdGY2VRai82cERUbEE0Yz0
    },
    {
        code: 'ML30BI',
        name: 'godox luz ML30BI',
        price: 365690,
        stock: 3,
        description: `
  Este kit de 2 luces LED bicolor ML30Bi Dainty de Godox tiene características básicas para usar en el estudio o en el lugar. El kit incluye dos luces de color variable ML30Bi, cada una con un cable de alimentación, un cable de CC, un reflector y una caja de luz. También se incluyen una empuñadura, una carpa blanda plegable, un domo de difusión, una caja de batería y una bolsa de transporte.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2294_1_z.jpg',
        state: true,
        categoryId: 3,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2294_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2294_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2294_5_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Temperatura de color: ',
                value: '96/97 CRI/TLCI',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=RnRSUm5xSXdBMno1T0ZqNVU0dmZMWnV1SlZnbHlWNDZDRmtWbmVQRmNKOD0
    },
    {
        code: 'LF308D',
        name: 'godox luz de video nocturna',
        price: 46520,
        stock: 8,
        description: `
    La luz de video LED de luz diurna Godox LF308D con sincronización de flash cuenta con 308 bombillas LED de luz diurna equilibradas que brindan una salida brillante en un paquete liviano. Cuenta con una placa de batería de la serie L incorporada (batería no incluida), o puede encender la luz desde el adaptador de corriente CA a CC incluido. La luz es regulable de 100 a 0% de brillo, y una pantalla LCD incorporada muestra la temperatura de color, el brillo, la energía de la batería y el canal inalámbrico.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2228_1_z.jpg',
        state: true,
        categoryId: 3,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2228_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2228_4_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Salida: ',
                value: '5600K',
            },
            {
                name: 'Regulable: ',
                value: 'de 100 a 0%',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=eVRjdm0zLzlHNTRwWm1CZmNZSkplSVUwb1BwcUtTd2NtTVpwR3BLeVRIWT0
    },
    {
        code: '320EX',
        name: 'canon speedlite 320EX',
        price: 32720,
        stock: 2,
        description: `
    Con tecnología inalámbrica esclava, un cabezal de rebote/giratorio y una fuente de iluminación LED constante para trabajar con vídeo, el nuevo Canon Speedlite 320EX abre la puerta a nuevas posibilidades de creación para fotógrafos EOS.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/378_1_z.jpg',
        state: true,
        categoryId: 3,
        discount: 25,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/378_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/378_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/378_4_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/378_6_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Número de guía: ',
                value: '105 a ISO 100 y 50 mm',
            },
            {
                name: 'Cobertura: ',
                value: '24 mm y 50 mm (cuadro completo)',
            },
            {
                name: 'Tiempo de reciclaje: ',
                value: '0.1-2.3 segundos',
            },
            {
                name: 'LED Video Light: ',
                value: '75 lux de salida',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=WURlYjZFQkhnMUNPUGlTMnN4aHlQSWhNNjVHZ2ZUckZCTW9tbDdXaWNiUT0
    },
    {
        code: 'CFUSB3',
        name: 'sanDisk lector professional',
        price: 11015,
        stock: 7,
        description: `
    El lector profesional de tarjetas múltiples USB 3.0 3 en 1 de Lexar permite transferencias de alta velocidad de la tarjeta a la computadora. Construido con ranuras para tarjetas UHS-II SDXC, UHS-II microSDXC y UDMA 7 CompactFlash dedicadas, este lector admite transferencias de hasta 312 MB/s para medios UHS-II SD y 160 MB/s para medios UDMA 7 CompactFlash.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2369_1_z.jpg',
        state: true,
        categoryId: 2,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2369_2_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Ranura para tarjeta: ',
                value: 'UHS-II SDXC',
            },
            {
                name: 'Ranura para tarjeta: ',
                value: 'microSDXC UHS-II',
            },
            {
                name: 'Ranura para tarjeta: ',
                value: 'CompactFlash UDMA 7',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=RHhLV0RnMHV3OElYdzByTXZycEZ3UTBuK1lVbkRmQ2J4MlFOcEhiVk0xbz0
    },
    {
        code: 'SDEPM',
        name: 'sandisk extreme pro',
        price: 7990,
        stock: 5,
        description: `
    Diseñada para cámaras de acción y dispositivos móviles, la tarjeta de memoria microSDHC Extreme UHS-I de 32 GB de SanDisk cuenta con una capacidad de almacenamiento de 32 GB y admite velocidades máximas de lectura de 100 MB/s y velocidades máximas de escritura de 60 MB/s.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2368_1_z.jpg',
        state: true,
        categoryId: 2,
        discount: 5,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2368_1_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Capacidad de almacenamiento: ',
                value: '32 GB',
            },
            {
                name: 'Velocidad máxima de lectura: ',
                value: '100 MB/s',
            },
            {
                name: 'Velocidad máxima de escritura: ',
                value: '60 MB/s',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=Qi9zU2JaS3ZJT3dwdi9tNHdUaVhTd2NMbGZoWXBzcEhGR0FmUFV5alVhOD0
    },
    {
        code: 'EFPS6500c',
        name: 'easycover funda protectora ',
        price: 12990,
        stock: 3,
        description: `
    Delgado y suave, la Cubierta de protección de silicona de EasyCover protege su cuerpo de la cámara de golpes, arañazos, polvo y arena. La piel de silicona perfectamente ajustable proporciona un agarre seguro, y hay dos protectores de pantalla flexible incluido para proteger a la pantalla LCD.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1280_1_z.jpg',
        state: true,
        categoryId: 2,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1280_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1280_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1280_4_z.jpg',
            },
        ],
        properties: [
        // {
        //   name: 'Capacidad de almacenamiento: ',
        //   value: '32 GB',
        // },
        // {
        //   name: 'Velocidad máxima de lectura: ',
        //   value: '100 MB/s',
        // },
        // {
        //   name: 'Velocidad máxima de escritura: ',
        //   value: '60 MB/s',
        // },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=ZmFvQ3NOU1M2TFl3d3NuMlNNVDRvbjZsNDJ3QjhvUFo3b0RPdUFWWHdCcz0
    },
    {
        code: 'TTPRHD',
        name: 'think tank photo raincover',
        price: 19790,
        stock: 5,
        description: `
    Proteja su cámara y su lente con la cubierta de lluvia Hydrophobia D 24-70 V3.0 de Think Tank. Esta cubierta tiene un revestimiento DWR (repelente de agua duradero) y está hecha de tres capas de material para mayor durabilidad. También está sellado en las costuras para brindar mayor protección contra la lluvia, el aguanieve, la nieve, la arena y el polvo.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1618_1_z.jpg',
        state: true,
        categoryId: 2,
        discount: 8,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1618_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1618_4_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1618_5_z.jpg',
            },
        ],
        properties: [
        // {
        //   name: 'Capacidad de almacenamiento: ',
        //   value: '32 GB',
        // },
        // {
        //   name: 'Velocidad máxima de lectura: ',
        //   value: '100 MB/s',
        // },
        // {
        //   name: 'Velocidad máxima de escritura: ',
        //   value: '60 MB/s',
        // },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=NTVWOFVtejFVUHZzNFpwcFFlZzN2YXFSd09oTnBCbWgzV2tJYzcybXpxaz0
    },
    {
        code: 'VMV2',
        name: 'vanguard monopie veo',
        price: 39780,
        stock: 5,
        description: `
    El monopie de aluminio VEO 2 AM-264TR con base de bloqueo de 3 patas de Vanguard es un soporte de 4 secciones que tiene una capacidad de carga de 6 kg y puede alcanzar una altura máxima de 64". El monopie de 2 lb se pliega fácilmente a 57.2 cm torciendo las cerraduras de las piernas.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1492_1_z.jpg',
        state: true,
        categoryId: 4,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1492_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1492_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1492_4_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Capacidad de carga: ',
                value: '13.2 lb / 6 kg',
            },
            {
                name: 'Altura máxima: ',
                value: '64.6 / 164.1 cm',
            },
            {
                name: 'Longitud Cerrada: ',
                value: '22.5 / 57.2 cm',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=b3lKUkRNbFhRNTVRNXVRRXNqQi9nZzAvNzJLUS94VGJvK0lvbURDTlluUT0
    },
    {
        code: 'VV235R',
        name: 'vanguard 235 ab red',
        price: 23540,
        stock: 5,
        description: `
    VEO 2 235AB es fácilmente portátil y súper ligero, 23 mm, trípode de 5 secciones de viaje de aluminio, kit con una cabeza de bola de acción múltiple que incluye una carga máxima de trabajo de 6 kg / 13.2 libras. Pesa sólo 1,4 kg y puede extenderse hasta 145 cms.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/1490_1_z.jpg',
        state: true,
        categoryId: 4,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1490_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1490_3_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/1490_4_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Capacidad de carga: ',
                value: '13.2 lb / 6 kg',
            },
            {
                name: 'Altura máxima: ',
                value: '57.1 / 145 cm',
            },
            {
                name: 'Longitud Cerrada: ',
                value: '15.75 / 40 cm',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=OEtENWU2ZXpKWG1DNEhXYjAvaVFEalBaSm0yUVpaZ25ESFVpQlprQmtEND0
    },
    {
        code: 'GTWHM1',
        name: 'godox transmisor de mano inalámbrico WH-M1',
        price: 52660,
        stock: 5,
        description: `
    El Godox WH-M1 es un micrófono / transmisor de mano inalámbrico compatible con el sistema inalámbrico WMicS1. Diseñado para caber cómodamente en la mano, este robusto micrófono totalmente metálico brinda a los artistas y presentadores un sonido de voz claro y confiabilidad inalámbrica (en un rango de hasta 260 ') para aplicaciones de discursos, conferencias, entrevistas y casas de culto.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2110_1_z.jpg',
        state: true,
        categoryId: 5,
        discount: 23,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2110_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2110_3_z.jpg',
            },
        ],
        properties: [
        // {
        //   name: 'Capacidad de carga: ',
        //   value: '13.2 lb / 6 kg',
        // },
        // {
        //   name: 'Altura máxima: ',
        //   value: '57.1 / 145 cm',
        // },
        // {
        //   name: 'Longitud Cerrada: ',
        //   value: '15.75 / 40 cm',
        // },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=VWpkYVQzdXRSU01kYUNubGorelZ5b0EzVjVtdXVkTzNpTmRiZ2xjNDlKUT0
    },
    {
        code: 'SSMIUHF',
        name: 'synco sistema de micrófono inalámbrico',
        price: 1,
        stock: 7,
        description: `
    El Synco WMic-T3 es un sistema de micrófono lavalier inalámbrico para montaje en cámara que ofrece una solución flexible y completa para videógrafos, vloggers y periodistas móviles que necesitan grabar dos sujetos en cámaras, videocámaras o dispositivos móviles como teléfonos inteligentes y tabletas, incluso en grandes distancias.`,
        image: 'https://www.digi-zoom.com.ar/images/productos/2058_1_z.jpg',
        state: true,
        categoryId: 5,
        discount: 0,
        images: [
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2058_2_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2058_4_z.jpg',
            },
            {
                url_image: 'https://www.digi-zoom.com.ar/images/productos/2058_6_z.jpg',
            },
        ],
        properties: [
            {
                name: 'Cables de salida: ',
                value: 'TRS, TRRS y XLR',
            },
            {
                name: 'Entrada de micrófono: ',
                value: 'línea de 3,5 mm en el transmisor',
            },
            {
                name: 'Salida principal: ',
                value: '3,5 mm en el receptor',
            },
        ],
        // https://www.digi-zoom.com.ar/productos_detalle.php?i=Y082M291S2VSSGJkYTFXdWZkQ2ppN3E2M0IrMllaRXFvSm0vckNIV3NuUT0
    },
];
exports.usersData = [
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
        userName: 'TomasUser',
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
        userName: 'FlorUser',
    },
    {
        name: 'leo',
        lastName: 'messi',
        imageProfile: 'https://www.lavoz.com.ar/resizer/NIrwqF-30hCyH3lDF05KKhi2iig=/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/BGRXLQMBXNADBIBSMZ6VQUUNQI.jpg',
        mail: 'messi@gmail.com',
        password: '18diciembre',
        phone: 234312,
        birthday: 32,
        state: true,
        roleId: 2,
        userName: 'leoMessi',
    },
    {
        name: 'Octa',
        lastName: 'Blanc',
        imageProfile: 'https://scontent.faep9-3.fna.fbcdn.net/v/t39.30808-6/297256312_5527550540665082_6913897283148335403_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=stUK4Hl2n2YAX836Y6u&_nc_ht=scontent.faep9-3.fna&oh=00_AfBCYKQVsS8quLVZ84T0W_fOCjemMEvGvzOT8runM8UAvA&oe=63A958BF',
        phone: 2235511921,
        mail: 'octa@gmail.com',
        password: '1234567',
        userName: 'username',
        birthday: '1999-12-04',
        state: true,
        roleId: 1,
    },
];
exports.ordenBuyArray = [
    {
        priceTotalDiscount: 1200000 * 10 + 15000 * 30 + 15000 * 2,
        discount: 20,
        state: true,
        postalCode: 199,
        street: 'calle falsa',
        height: '12943',
        city: 'varelaa',
        quantityProducts: 10,
        dues: 130,
        userId: 1,
        buy: true,
        productOrders: [
            {
                productId: 1,
                quantity: 10,
                price: 1200000 * 10,
            },
            {
                productId: 2,
                quantity: 30,
                price: 15000 * 30,
            },
            {
                productId: 3,
                quantity: 2,
                price: 15000 * 2,
            },
        ],
    },
    {
        priceTotalDiscount: 250,
        discount: 20,
        state: true,
        postalCode: 199,
        street: 'calle falsa',
        height: '12943',
        city: 'varelaa',
        quantityProducts: 10,
        dues: 130,
        userId: 1,
        buy: true,
        productOrders: [
            {
                productId: 10,
                quantity: 10,
                price: 4999 * 10,
            },
            {
                productId: 4,
                quantity: 30,
                price: 1000,
            },
            {
                productId: 4,
                quantity: 2,
                price: 1000,
            },
        ],
    },
    {
        priceTotalDiscount: 350,
        discount: 20,
        state: true,
        postalCode: 199,
        street: 'calle falsa',
        height: '12943',
        city: 'varelaa',
        quantityProducts: 10,
        dues: 130,
        userId: 1,
        buy: true,
        productOrders: [
            {
                productId: 3,
                quantity: 10,
                price: 1000,
            },
            {
                productId: 1,
                quantity: 30,
                price: 1000,
            },
            {
                productId: 17,
                quantity: 2,
                price: 1000,
            },
        ],
    },
    {
        priceTotalDiscount: 12323,
        discount: 321321,
        state: true,
        postalCode: 213,
        street: 'reerer falsa',
        height: '12943',
        city: 'fdsfda',
        quantityProducts: 100,
        dues: 130,
        userId: 2,
        buy: false,
        productOrders: [
            {
                productId: 10,
                quantity: 1,
                price: 1000,
            },
            {
                productId: 3,
                quantity: 20,
                price: 1000,
            },
            {
                productId: 6,
                quantity: 4,
                price: 1000,
            },
        ],
    },
];
