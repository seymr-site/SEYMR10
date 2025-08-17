import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || 'dev-secret';
export function sign(payload: any, ttlSec = 60*60){
  return jwt.sign(payload, secret, { expiresIn: ttlSec });
}
export function verifyToken(token:string){
  try{ return jwt.verify(token, secret); }catch{ return null }
}
