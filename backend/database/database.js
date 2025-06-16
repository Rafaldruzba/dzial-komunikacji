const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
	debug: true,
	connectTimeout: 60000,
});

const connect = async () => {
	try {
		console.log('Próba połączenia z bazą danych...');
		console.log('Host:', process.env.DB_HOST);
		console.log('User:', process.env.DB_USER);
		console.log('Database:', process.env.DB_NAME);

		const connection = await pool.getConnection();
		console.log('Połączono z bazą danych MySQL.');
		connection.release();
	} catch (error) {
		console.error('Szczegóły błędu połączenia:', {
			code: error.code,
			errno: error.errno,
			sqlState: error.sqlState,
			sqlMessage: error.sqlMessage,
		});
		throw error;
	}
};

module.exports = {
	pool,
	connect,
};
