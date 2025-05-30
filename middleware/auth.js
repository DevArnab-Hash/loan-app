import { verify } from 'jsonwebtoken';

const auth = (req, res, next) => {
    const { cookies } = req;
    if(cookies.jwt){
        try{
            const data = verify(cookies.jwt, process.env.SECRET);
            req.id = data.id;
            req.token = cookies.jwt;
            return next();
        }catch(error){
            console.log(error.message);
        }
    }

    return res.status(401).send({
        success: false,
        message: "Sorry you are not authenticated."
    })
}

export default {auth}