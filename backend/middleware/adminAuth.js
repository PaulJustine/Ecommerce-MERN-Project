import jwt from 'jsonwebtoken';

const adminAuth = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.json({success:false,message:"Not authorised Login again"})
        }
        const token_decode=jwt.verify(token, process.env.JWT_SECRET);
        if(token_decode!== process.env.ADMIN_EMAIL && token_decode!== process.env.ADMIN_ID){
            return res.json({success:false,message:"Not authorised Login again"})
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})   
    }
}
export default adminAuth;