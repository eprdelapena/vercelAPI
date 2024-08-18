import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.get('/app', (req, res) => {
    return res.send('app url')
})


app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;