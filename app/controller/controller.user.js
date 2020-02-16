const User = require('./../model/model.user')
module.exports = {
    create: async (req, res, next) => {
        try {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                business: req.body.business
            })
 console.log(user)
           await user.save()
           
           res.status(200).json({
               sucess:true,
               user
           })
        }catch(err){
            res.status(500).json({
                sucess:false,
                err
            })
        }
        
    },
    findAll:(req,res,next)=>{
         User.find((err,result)=>{
             if(err){
                 res.status(500).json({
                     err
                 })
             }
             else{
                 res.status(200).json({
                     result
                 })
             }
         })
          
    }
}