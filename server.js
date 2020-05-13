const express= require('express');
//const favicon= require('express-favicon');
const path=require('path');
const port=process.env.PORT || 5000;
const app= express();
//app.use (favico(__dirname + '/build/favicon.ico'));




const publicpath= path.join(__dirname,'..','public');
app.use(express.static(publicpath));


//app.listen(port)

app.use(express.static(path.join(__dirname,'build')));

app.get('*',function(req,res){
	res.sendFile(path.join(publicpath,'index.html'));

});

app.listen(port,function(err,){

    if (err){
        console.log(`error in running the server : ${err}`);
    }



    console.log(`server is up and running at port :${port}`);
});