import express from 'express'
import cors from 'cors';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('hello me');
// })

// app.use(cors({
//     origin:'http://localhost:5173'
// }));

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'Yet another joke',
            content:'This is yet another joke'
        },
        {
            id:4,
            title:'Last joke',
            content:'This is the last joke'
        },
        {
            id:5,
            title:'Last joke',
            content:'This is the last joke'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})