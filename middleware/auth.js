import jwt from 'jsonwebtoken'

const segredo = "mateus é 1 gay do krl 1212"

export default async function authMidlleware(req, res, next) {
    try {
        const token = req.headers['authorization']
        console.log(token)
        if(!token) {
            throw new Error()
        }
        const decoded = jwt.verify(token, segredo)
        req.session = decoded
        console.log(decoded)
        next()
    } catch (error) {
        res.status(403).send({ message: "Sem permissão pra fazer esse processo"})
    }
}