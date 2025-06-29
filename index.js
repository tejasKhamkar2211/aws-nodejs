const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for "/"
app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vitthal Vitthal</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #e0f7fa;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          h1 {
            color: #2e7d32;
            font-size: 3em;
            animation: fadeIn 3s ease-in-out infinite alternate;
          }
          img {
            max-width: 80%;
            height: auto;
            margin-top: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            animation: float 4s ease-in-out infinite;
          }
          @keyframes fadeIn {
            from { opacity: 0.4; }
            to { opacity: 1; }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        </style>
      </head>
      <body>
        <h1>!!! Vitthal Vitthal !!!</h1>
        <img src="/nature.jpg" alt="Nature Image">
      </body>
    </html>
  `);
});

// Listen on port
app.listen(process.env.PORT || 3000);

module.exports = app;
