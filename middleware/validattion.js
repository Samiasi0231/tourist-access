
const validateTouristSignup = (req, res, next)=>{

    const { name, email, location} = req.body

    error = []

    if(!name){
        error.push("Please enter your name")
    }

    if(!email){
        error.push( "Please enter your email")
    }

    if(!location){
        error.push("Please enter a Location.")
      } 
    
    if(error.length > 0){
        return res.status(400).json( error)
    }

    next()
}

const validateTouristLogin = (req, res, next)=>{

    const { passkey } = req.body

    error = []

    if(!passkey){
        error.push("Please enter a pass.")
      } 
    
    if(error.length > 0){
        return res.status(400).json( error)
    }

    next()
}

module.exports ={ validateTouristSignup,validateTouristLogin }