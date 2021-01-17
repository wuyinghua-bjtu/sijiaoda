const { request, response } = require('express');
const express = require('express');

const app = express();
// 创建路由规则
app.get('/server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('HELLO EXPRESS');
});

app.post('/server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('HELLO EXPRESS');
});

app.listen(8000, ()=>{
    console.log("zwsb!");
});