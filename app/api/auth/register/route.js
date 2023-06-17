import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";

export const POST = async (request) => {
  const { username, email, password } = await request.json();

  await connect();

  const hashedpassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name: username,
    email: email,
    password: hashedpassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User Registered", {
      status: 201,
    });
  } catch (error) {
    console.log("err", error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
