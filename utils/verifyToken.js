import  Jwt  from "jsonwebtoken";
export const  verifyToken =(req,res,next)=>{
    const token=req.cookies.access_token
    if(!token)
    return res.send("error");
    Jwt.verify(token,process.env.Jwt,(err,user)=>{
        if(err) 
    return res.send(err)
    req.user =user  //koi random property user me user bhej diya
    next();//iske baad voh next vale route pe gya
    })
}

export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id==req.params.id){
            next();
        }
        else{
            return res.send("User not Verified")
        }
    })
    
}