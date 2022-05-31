const Users =  require('./users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class Auth{

    async login(credentials){
        const{email,password} = credentials
        const UserService = new Users()
        const user = await UserService.getByEamil(email)

        if(user && this.compare(password,user.password)){
            delete user.password
            const token = this.createToken(user)
            return {
                logged:true,
                data:user,
                token
            }
        }

        return{
            logged:false,
            message:'credenciales incorrectas'
        }

    }
    async singup(credentials){
        const UserService = new Users()
        credentials.password = await this.encrypt(credentials.password)
        const user = await UserService.create(credentials)

        if(user){
            const token = this.createToken(user)
            return{
                logged:true,
                data:user,
                token
            }
        }
        return {
            logged:false,
            message:'credenciales incorrectas'
        }
    }
    createToken(data){
        const token = jwt.sign(data,'12345')
        return token
    }
    async encrypt(text){
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(text,salt)
        return hash
    }
    async compare(text,hash){
        const result = await bcrypt.compare(text,hash)
        return result //true or false
    }
}

module.exports = Auth