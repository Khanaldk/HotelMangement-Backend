const express=require('express');
const dotenv=require('dotenv')
dotenv.config();

const swaggeruiexpress=require('swagger-ui-express');
const swaggerjsdoc=require('swagger-jsdoc');
const swaggerDocs=require('./docs/swaggerDocs');
const routes = require('./routes');

const app=express();

const port=process.env.PORT || 4000

app.use(express.json());

app.use('/api',routes)
app.use('/api-docs/',swaggeruiexpress.serve,swaggeruiexpress.setup(swaggerjsdoc(swaggerDocs)));

app.listen(port,(req,res)=>{
    console.log(`Listening to port ${port}`)
})


// git init
// git add .
// git commit -m "project related name"
// git remote add origin (paste the repository link here)
// git pull origin main
// git push origin master