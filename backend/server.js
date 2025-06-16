require('dotenv').config();
const app = require('./app');
const database = require('./database/database');
const PORT = process.env.PORT || 5000;

// Połączenie z bazą danych
database
	.connect()
	.then(() => {
		console.log('Połączono z bazą danych');
		// Uruchomienie serwera
		app.listen(PORT, () => {
			console.log(`Serwer działa na porcie ${PORT}`);
		});
	})
	.catch((err) => {
		console.error('Błąd podczas łączenia z bazą danych:', err);
		process.exit(1);
	});
