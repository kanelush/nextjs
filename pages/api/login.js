import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'


const KEY = '-lkdasljasdljdaslkjdk1231l23kjadslk'
export default function (req, res) {
    if(!req.body){
        res.statusCode = 404
        res.send("error")
        return
    }
    const { username, password } = req.body

    res.json({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'admin'
        }, KEY)
    })
}