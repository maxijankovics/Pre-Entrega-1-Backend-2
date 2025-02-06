import bcrypt from "bcrypt";

const salt_round = 10;

export async function createHash(password) {
    
    const hashPassword = await bcrypt.hash( password, bcrypt.genSaltSync(salt_round));
    return hashPassword;

}

export async function verifyPassword(password, hash) {

    const isPasswordCorrect = await bcrypt.compare( password, hash );
    return isPasswordCorrect
    
}