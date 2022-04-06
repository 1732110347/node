const http=require('http')
const server=http.createServer()

server.on('request',function(req,res){
    const str=`Your request is ${req.url},and ${req.method}`
    console.log(str);
    res.end(str)
    console.log('s');
})
server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})