const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://skill:skill123@cluster0.wtfdwig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
