
import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();
//esta contante guarda la conexión a la base de datos a través de la variable de entorno
const connection = mysql.createConnection(process.env.DATABASE_URL);

export default connection.promise();