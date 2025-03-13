import connectToMongo from "@/app/lib/config/db";
import CaptchaModel from "@/app/lib/models/CaptchaModel";

import { NextResponse } from "next/server"; // Add this import

const LoadDB = async () => {
  await connectToMongo();
};

LoadDB();

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Received Data:", data.status); // Log received data

    if (data.status) {
      console.log("inside here ");

      const res = await CaptchaModel.create({});

      return NextResponse.json({ status: true });
    }
  } catch (error) {
    console.error("Error in processing the request:", error); // Log the error message
    return NextResponse.json({ status: false }, { status: 500 });
  }
}





export async function GET(req) {
  try {
    const data = await CaptchaModel.findOne();

    if (data?.status == true) {
      await CaptchaModel.deleteMany();
      return NextResponse.json({ data: data });
      
    } else {
      return NextResponse.json({ data: false });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: false });
  }
}
