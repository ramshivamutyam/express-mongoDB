import jwt from "jsonwebtoken";
import "dotenv/config";

async function authenticate(req, res, next) {
    const token = await req.cookies.token;
    if (!token) res.status(401).json({ message: "No token ,access denied" });

    //verify token
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(400).json({ message: "Not a valid token." });
    }
}

export default authenticate;
