# TERCERA ENTREGA DEL PROYECTO FINAL

>>url imagenes para test:

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-EXAGON-GREEN-1024x1024.png?alt=media&token=92f34b40-9c27-4271-855a-2b92680abb08

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-EXAGON-ORANGE-1024x1024.png?alt=media&token=0c01c355-c01e-4184-9dc6-eee704d779d5

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-EXAGON-yellow-1024x1024.png?alt=media&token=bc5052da-564b-4e05-ac40-7abf53838803

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-confort-1.jpg?alt=media&token=07a158ac-0cad-498a-bcc1-4230febd24fa

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-hybrid-1.jpg?alt=media&token=01ef2cae-7915-465a-ac39-1e5d52e5e12d

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-speed-1.jpg?alt=media&token=1e60a193-2046-466b-a574-958f8c76eaa0

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/carbon-confort-1.jpg?alt=media&token=d46fb7ed-58d7-4dca-a0df-c2eadd10952f

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/confort-1.jpg?alt=media&token=acdbf655-3493-4b88-86ec-0d1eec826c79

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/genetic-ultra-carbon-1024x1024.png?alt=media&token=1fa048a5-b6e4-4047-9487-f6962b22e6b2

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/grapheno-confort-1.jpg?alt=media&token=877c5efa-54c0-48e1-baf0-d6b908ae9d76

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/speed1.jpg?alt=media&token=66e0c683-1f20-4e01-96da-178ed322e7cf


>>Consigna: 

Envío de un email y un mensaje de whatsapp al administrador desde el servidor, a un número de contacto almacenado en una constante global.

● El usuario iniciará la acción de pedido en la vista del carrito.

● Será enviado una vez finalizada la elección para la realizar la compra de productos.

● El email contendrá en su cuerpo la lista completa de productos a comprar y en el asunto la frase 'nuevo pedido de ' y el nombre y email del usuario que los solicitó. En el mensaje de whatsapp se debe enviar la misma información del asunto del email.

● El usuario recibirá un mensaje de texto al número que haya registrado, indicando que su pedido ha sido recibido y se encuentra en proceso.

>>Aspectos a incluir:

➔ El servidor trabajará con una base de datos DBaaS (Ej. MongoDB Atlas) y estará preparado para trabajar en forma local o en la nube a través de la plataforma PAAS Heroku.

➔ Habilitar el modo cluster para el servidor, como opcional a través de una constante global.

➔ Utilizar alguno de los loggers ya vistos y así reemplazar todos los mensajes a consola por logs eficientes hacia la misma consola. En el caso de errores moderados ó graves el log tendrá además como destino un archivo elegido.

➔ Realizar una prueba de performance en modo local, con y sin cluster, utilizando Artillery en el endpoint del listado de productos (con el usuario vez logueado). Verificar los resultados.