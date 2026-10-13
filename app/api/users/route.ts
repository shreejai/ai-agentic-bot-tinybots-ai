import { users } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  // If user already exist in db
  const userResult = await db.select().from(users).where(eq(users.email, user?.primaryEmailAddress?.emailAddress??''))

  // If not insert user into db
  if(userResult.length === 0) {
    const result = await db.insert(users).values({
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress??'',
    }).returning();

    return NextResponse.json(result);
  }

  return NextResponse.json(userResult[0]);
}