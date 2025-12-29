const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    const message = process.env.MESSAGE || 'Hello World from Node.js!';
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>App Node.js Docker</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f0f0;
                }
                .container {
                    text-align: center;
                    padding: 40px;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                }
                .version {
                    color: #666;
                    margin-top: 20px;
                }
                .branch {
                    color: #4CAF50;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${message}</h1>
                <div class="version">Versão: 1.0.0</div>
                <div class="branch">Branch: ${process.env.BRANCH || 'local'}</div>
                <div>Host: ${process.env.HOSTNAME || 'localhost'}</div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
