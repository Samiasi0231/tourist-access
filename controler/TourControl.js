
const Tour = require ("../model/TourModel")
const Math = require("Math")
const { validateTouristSignup,validateTouristLogin } =require("../middleware/validattion")


function generatePasskey(){
    return Math.random().toString(12).substring(2,10).toLocaleLowerCase();

}
function generateSignupkey(){
    return Math.random().toString(10).substring(2,10).toLocaleLowerCase();
    
}
const touristSignup = async(req,res)=>{
    try{
        const {name,email,destination} = req.body
        const userExists= await Tour.findOne({email})
        if (userExists){
            return res.status(400).json({message:"A user with this email already exist."})
        }
        const passkey =generatePasskey();
        const signupkey = generateSignupkey();
        const newTourist =new Tour({name,destination,passkey,signupkey,email})
        await newTourist.save()
        res.json({passkey})

    } catch (error){
        console.error(error)
    
    }
}

const touristLogin = async(req, res)=>{
    try{
        const {email}=req.body
        const existingTourist =await Tour.findOne({email})
        if(existingTourist){
            res.json({message:"login successful"})
        } else{
            res.status(400).json({error:"unathorized user"})
        }
    } catch (error){
        console.error(error)
         }


    }
    module.exports = { touristSignup,touristLogin,}


