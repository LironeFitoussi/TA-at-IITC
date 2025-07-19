import bcrypt from 'bcrypt'

const SECRET_KEY = process.env.ENCYPTION_SECRET

export async function hashPassword(userPassword) {
    const saltRounds = 10
    const combinedPassword = userPassword + SECRET_KEY
    
    const hashedPassword = await bcrypt.hash(combinedPassword, saltRounds)
    console.log("hashed: " + hashedPassword);
    
    return hashedPassword
}

export async function comparePassword(userPassword, dbHash) {
    const combinedPassword = userPassword + SECRET_KEY
    return bcrypt.compare(combinedPassword, dbHash)    
}