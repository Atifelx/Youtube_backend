import mongoose,{Schema} from "mongoose";


import mongooseAggregatePaginate from "mongoose-paginate-v2"



const videoSchema =new Schema(
    {


        videoFile:{

            type:String,
            required:true,
        },
        thumbnail:
        {
            type:String,
            required:true,

        },
        title:
        {
            type:String,
            required:true,

        },
        descriptions:
        {
            type:String,
            required:true,

        },
        duration:
        {
            type:Number,
            required:true,

        },
        view:
        {
            type:String,
            default:0,

        },
        isPublished:
        {
            type:Boolean,
            default:true

        },
        owner:
        {
            type:Schema.type.Object.Id,
            ref:"User"

        },

    },

    {
timestamps:true,
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema)