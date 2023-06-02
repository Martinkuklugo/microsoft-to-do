const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next )=>{
    const token = req.header('Bearer')
    if(!token) return res.status(401).json({ error: 'Acceso denegado' })

    try {
        const verificar = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verificar
        next()
    } catch (error) {
        return res.status(400).json({ error: 'Token invalido' })
    }

}

module.exports = verifyToken;