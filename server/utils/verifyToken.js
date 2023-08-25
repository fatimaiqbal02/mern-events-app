import jwt from 'jsonwebtoken'

//custom middlewares

//1) TO VERIFY TOKEN
export const verifyToken = (req, res, next)=>{

    const token = req.cookies.accessToken
    if(!token){
        return res.status(401).json({status: "failed", success:"false", 
                         message: "You are not authorized"})
    }

    //if token exits then verifying it
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(401).json({status: "failed", success:"false", 
                                         message: "Invalid Token"})
        }

        req.user = user
        next()
    })
}

//2) TO VERIFY USER
export const verifyUser = (req, res, next)=>{

    verifyToken(req, res, next, ()=>{
        if(req.user.id === req.params.id || req.user.role === 'admin'){
            next()
        }else{
            return res.status(401).json({status: "failed", success:"false", 
                                         message: "You are not Authenticated"})
        }
    })

}

//3) TO VERIFY ADMIN
export const verifyAdmin = (req, res, next)=>{

    verifyToken(req, res, next, ()=>{
        if(req.user.role === 'admin'){
            next()
        }else{
            return res.status(401).json({status: "failed", success:"false", 
                                         message: "You are not Authorized"})
        }
    })

}
