import jwt from 'jsonwebtoken';



export const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.SIGN_IN_TOKEN, { expiresIn: '24h' });
}

export const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.SIGN_IN_TOKEN);
    return decoded;
}