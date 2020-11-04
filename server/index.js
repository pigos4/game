const express = require ('express');
const app = express();
const cors = require('cors');
const port = 5555;
app.use(cors());
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.use(cors());
let counts={count:1,
    countMax:1000,
    countcost:20,
    moltiplier:1

};
function countup(){
    {if(counts.count<counts.countMax){counts.count=counts.count+counts.moltiplier}}
}
setInterval(()=>countup(),1000);
app.get('/i',(req,res)=>
res.send(counts))
app.post('/i',(req,res)=>{
    if(req.body.moltiplier===true&&counts.count>counts.countcost)
    {counts.moltiplier=counts.moltiplier+1;counts.count=counts.count-counts.countcost; console.log('true')}console.log(req.body.moltiplier,"req.body")});

app.listen(port,()=>`app listern on port ${port}`);
