import mongoose, {Schema, Document} from "mongoose";


export interface Message extends Document{
    content : string;
    createdAt: Date;
}

const MessageShema: Schema<Message> = new Schema({
    content:{
        tyep:String,
        requried:true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username : string;
    password: string;
    verifyCode: string;
    verifyCodeExpirey: Date;
    isverified:boolean;
    isAccetingMessage: boolean;
    email: string;
    messages: Message[]
}

const UserSchema : Schema<User> = new Schema({
    username: {
       type: String,
    requried:[true, "Username is requried"],
    trim: true,
    unique: true
    },
    email: {
        type: String,
        requried: true,
        unique: true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please use a valid address"]
    },
    password: {
        type: String,
        requried: true
    },
    verifyCode:{
        type: String,
        required: true
    },
    verifyCodeExpirey: {
        type: Date,
        requried: true
    },
    isverified:{
        type : Boolean,
        default: false
    },
    isAccetingMessage:{
        type: Boolean,
        default: false
    },
    messages: [MessageShema]

})

const UserModel = (mongoose.models.User as mongoose.Model<User> ) ||  mongoose.model<User>("User", UserSchema)

export default UserModel;