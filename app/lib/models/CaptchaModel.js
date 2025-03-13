const { default: mongoose } = require("mongoose");


const Schema=new mongoose.Schema({
    
    token:{
        type:String,
        default:''
    },
    status:{
        type:Boolean,
        default:false
    }
},{timeStamp:true})


const CaptchaModel=mongoose.models.captcha || mongoose.model('captcha',Schema)

export default CaptchaModel