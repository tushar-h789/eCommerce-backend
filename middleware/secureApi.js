const secureApi =(req, res, next)=>{
    console.log("api", req.headers.authorization);
    if(req.headers.authorization == "tusharsecureapi"){
        next()
    }else{
        res.send({error: "Need valid permission"})
    }

}

module.exports = secureApi