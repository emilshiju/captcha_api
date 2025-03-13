import connectToMongo from "@/app/lib/config/db";
import CaptchaModel from "@/app/lib/models/CaptchaModel";
import { NextResponse } from "next/server";


const LoadDB=async()=>{
    
    await connectToMongo()
}

LoadDB()


export async function GET() {

    try {
        
        const getCaptcha=await CaptchaModel.findOne({})
       

        if (getCaptcha?.status==false){


        return NextResponse.json({status:true }, {status: 200 });


        }

        return NextResponse.json({status:false }, {status: 200 });

    } catch (error) {

        return NextResponse.json({ error: "Failed to fetch task" }, { status: 500 });
    }

}





export async function POST(req) {

    try {
        console.log("post here")

        const data = await req.json();
        console.log("Received Data:", data); 

        const editCaptcha=await CaptchaModel.updateOne({token:data.token,status:true})

        
        // const data = { message: "Task fetched successfully", status:true };
        console.log("gone")

        return NextResponse.json({status:true},{status: 200 });

    } catch (error) {
        console.log(error)

        return NextResponse.json({ error: "Failed to fetch task" }, { status: 500 });
    }

}
