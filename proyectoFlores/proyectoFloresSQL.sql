CREATE SCHEMA proyectoFlores;
USE proyectoFlores;

CREATE TABLE users(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
apellido VARCHAR(255) NOT NULL,
birthDate DATE NOT NULL,
dni INT UNSIGNED UNIQUE NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
deletedAt DATETIME


);


CREATE TABLE products(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productName VARCHAR(255) NOT NULL,
description TEXT, 
image VARCHAR(255) NOT NULL,
userId INT UNSIGNED NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
deletedAt DATETIME,

FOREIGN KEY (userId) REFERENCES users(id)

);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
text TEXT NOT NULL,
userId INT UNSIGNED NOT NULL,
productId INT UNSIGNED NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
deletedAt DATETIME,

FOREIGN KEY (userId) REFERENCES users(id),
FOREIGN KEY (productId) REFERENCES products(id)

);

INSERT INTO users
VALUES 
(DEFAULT, "Martin", "Bossi", 19741016, 25385117, "tinchobossi@gmail.com", "humor15", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Marcelo", "Tinelli", 19600401, 17411787, "marce_ribercampeon@gmail.com", "videomatch2020", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Lionel", "Messi", 19870624, 33016244, "liobrasil2014@gmail.com", "barsateamo", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Hagrid", "Hagrid", 19550309, 15387611, "griffindor99@gmail.com", "winguardinleviosa", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "KIko", "Zoona SUUr", 19851013, 34983456, "newellspasion@hotmail.com", "vamooonewellll", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products
VALUES
(DEFAULT, "Jardinera de orquideas", "Orquideas frecas y lindas para tu jardin", "imagen.jpg", 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Ramo armonia floral", "Ramo que llena de armonia tu alma y purifica tu corazon", "imagen.jpg", 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Ramo de tulipanes de primavera", "Los tulipanes te hacen sentir en el cielo sin olvidarte que tenes los pies en la tierra", "imagen.jpg", 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Indulgencia de cumpleaños", "Ideal para los cumpleanito de los nenes", "imagen.jpg", 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Ramo de condolencias clasico", "Ramo ideal para llevar a un entierro o velorio", "imagen.jpg", 5, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Rosas rojas", "Unas flores para morirse", "imagen.jpg", 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Cunas de Moises", "Las mejores rosas de Villa Crespo", "imagen.jpg", 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Encanto femenino", "Endulzá tu jardín con tales maravillas de la naturaleza", "imagen.jpg", 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Flor de lipa", "¿Qué esperas para deleitarte con el aroma de estas flores?", "imagen.jpg", 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Amor clandestino", "Recién sacadas del horno, te podes llevar un 2x1 con tu primera compra", "imagen.jpg", 5, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comments
VALUES
(DEFAULT, "A mi mujer le gustan las rosas, pero veo que estas rosas son rojas, no estoy encontrando en su pagina rosas de color rosa. Me podrian decir donde encontrarlas? gracias", 1, 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Muy bueno", 2, 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Feas flores", 3, 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Me gusto", 5, 1, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Horrible", 1, 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "mmmm feo", 3, 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Hermosas", 4, 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "gracias", 3, 2, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "muchas gracias", 2, 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "estoy encantado", 1, 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "hermosisimas", 5, 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "buenas", 4, 3, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "bueno si lindas pero..", 2, 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "un desastre", 1, 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "horripilantes", 5, 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "basuras", 3, 4, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "ladrones", 1, 5, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "estafadores", 5, 5, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "maltratadores", 2, 5, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "hijos de su madre", 4, 5, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "los mejores", 3, 6, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "los peores", 2, 6, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "feas feas feas", 1, 6, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "gracias gracias", 4, 6, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "emoci0nado", 5, 7, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "lindisimas", 4, 7, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "podridas llegaron", 2, 7, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "mal pero no tan mal", 1, 7, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Mi mama las hace mejor", 3, 8, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Llegan hasta zona norte?", 4, 8, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Se puede pagar con mercadopago?", 2, 8, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Hola mi nombre es Gerardo vendo zapatillas si quieren visiten mi perfil", 1, 8, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Me gustan tus flores las podemos usar como modelo para nuestro sitio?", 5, 9, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Joder tío unas flores que flipo", 2, 9, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Muy buenas querida! Siempre tan deslumbrante", 1, 9, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Tremendas fotos bro", 4, 9, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Me gusta el club penguin", 1, 10, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Todo lo pibe con la mano arriba", 2, 10, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "@mama mira esto jaj", 4, 10, DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Como llegue aca no tengo idea", 3, 10, DEFAULT, DEFAULT, DEFAULT);












