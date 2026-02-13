/*
app.get
app.post

res.send()
res.sendFile(`${import.meta.dirname}/views/>>PAGENAME<<.html`)
*/

// Import express module.
import express from 'express';

const app = express();

const PORT = 3001; // Specifically use Port 3001

// Enable static file serving
app.use(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Root page
app.get('/', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit', (req, res) => {
    // Form submitted
    res.send("Thank you for your request!")
});


// Link to test locally
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});