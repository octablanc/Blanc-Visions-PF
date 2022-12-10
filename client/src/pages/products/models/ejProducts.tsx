export default interface Pro {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  code: number;
  description: string[];
  cuotes: number;
  image: string;
  price: number;
  entrega: string;
  stock: string;
  id_category: number;
  state: Boolean;
  features: string[];
}

export default interface Categ {
  name: string;
  value: string;
}

// let camaras: Ejemplo[] = [
//   {
//     nameProduct: 'Canon EOS Rebel Kit T7 + lente 18-55mm IS II DSLR',
//     atributes: [
//       'Sensor CMOS APS-C de 32.5M',
//       'Procesador de imagen DIGIC 8',
//       'Grabación de video UHD 4K30p y Full HD 120',
//       'Pantalla LCD táctil de ángulo variable de 3 y 1.04 m de punto',
//     ],
//     cuotes: 3,
//     precio: 144.279,
//     image: img,
//     entrega: '24 de diciembre',
//   },
//   {
//     nameProduct: 'CANON EOS 5D MARK IV BODY IMPORTACION OFICIAL',
//     atributes: [
//       'Sensor CMOS APS-C de 32.5M',
//       'Procesador de imagen DIGIC 8',
//       'Grabación de video UHD 4K30p y Full HD 120',
//       'Pantalla LCD táctil de ángulo variable de 3 y 1.04 m de punto',
//     ],
//     cuotes: 6,
//     image: img,
//     precio: 281.699,
//     entrega: '8 marzo',
//   },
//   {
//     nameProduct: 'CANON EOS 6D MARK II DSLR BODY',
//     atributes: [
//       'Sensor CMOS APS-C de 32.5M',
//       'Procesador de imagen DIGIC 8',
//       'Grabación de video UHD 4K30p y Full HD 120',
//       'Pantalla LCD táctil de ángulo variable de 3 y 1.04 m de punto',
//     ],
//     cuotes: 5,
//     image: img,
//     precio: 944.19,
//     entrega: '3 de abril',
//   },
// ];
