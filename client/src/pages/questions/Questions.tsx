import { Container, QyA } from "./styled-components/styles"

export const Questions = () => {
    return (
        <Container className='container'>
            <h2>Preguntas frecuentes</h2>
            <QyA>
                <h4>Envíos</h4>
                <p>¿Realizan envíos a domicilio?</p>
                <text>Sí, vas a recibir tu pedido desde la comodidad de tu hogar, abonando un pequeño costo de envío.</text>
                <p>¿Los envios son a todo el país?</p>
                <text>Sí, realizamos envíos a todo el territorio de la República Argentina. Una vez confirmada tu compra, recibirás la información del envío vía mail, para que puedas realizar el correspondiente seguimiento.</text>
                <p>¿Cuánto demora en llegar el envío a domicilio?</p>
                <text>Las entregas se realizan en un plazo de hasta 10 días hábiles a partir del momento en que se realiza el pago en nuestro sitio.</text>
                <p>¿Qué pasa si no estoy en mi domicilio cuando llega el pedido?</p>
                <text>El operador logístico te visitará en dos oportunidades. Si no puede concretarse la entrega, el producto permanecerá en la sucursal del operador logístico correspondiente durante los siguientes 5 días, donde podrá ser retirado por el destinatario del envío. Pasados los 5 días en la sucursal del operador logístico, volverá a nuestro depósito. </text>
                <p>Si no estoy yo a la hora de recibir el producto, ¿lo puede recibir alguien más?</p>
                <text>Sí, el servicio contempla la entrega a una persona mayor de 18 años con acreditación de identidad, sin necesidad de autorización por parte del comprador.</text>
                
                
                <h4>Cambios y Devoluciones por fallas de producto</h4>
                <text>No se aceptan cambios y devoluciones de productos usados o sin su envoltorio original. Los cambios se encuentran sujetos a disponibilidad de stock. Para recibir el nuevo producto o el reembolso correspondiente, primero deberás devolver el producto original, siguiendo los siguientes pasos:</text>
                <p></p>
                <text>1. Dentro de los 10 días posteriores a la recepción del producto: para realizar el cambio debés comunicarte con nuestro equipo de atención al cliente, llamando al (011) 2100 6019 o escribiendo a kingcomm@gmail.com</text>
                <p></p>
                <text>2. Si ya pasaron 10 días desde la recepción del producto, deberás contactarte con el Servicio Técnico autorizado, para que el mismo pueda efectuar la reparación o cambio. Llamanos al (011) 2100 6019 o escribinos a kingcomm@gmail.com para que podamos brindarte los datos de contacto.</text>
                
            </QyA>
        </Container>
    )
}