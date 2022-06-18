import { genSalt } from 'bcrypt';
import Users from '../models/UsersModel.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req,res) => {
    try {
        const users =  await Users.findAll({
            attributes:['id', 'email', 'password']
        });
        console.log(users);
        res.json({users})
    } catch (error) {
        res.status(404).json({msg:'couldnt get users'})
    }
}

export const login = async(req,res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email}
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(400).json({msg:'Wrong Password'});
        const userId = user[0].id;
        const email = user[0].email;    
        const accessToken = jwt.sign({userId, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '60s'
        })
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 60 * 1000,
        })
        console.log(accessToken)
        res.json({accessToken})
    } catch (error) {
        res.status(404).json({msg:'email was not found!'})
    }
    
}

export const register = async (req,res) => {
    const {email,password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt)
    try {
        await Users.create({
            email:email,
            password:hashPassword,
        });
        res.json({msg: 'Register Successfully'})
    } catch (error) {
        res.status(403).json({msg:'Email already exist!'})
    }
};


export const logout = (req,res) => {
    res.json({msg:'logout'})
};



