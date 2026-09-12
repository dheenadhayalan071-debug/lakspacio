import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, fullName, email, sport, facilityName, city } = body;

    // 1. Handle Athlete Registration
    if (type === "athlete") {
      const user = await prisma.user.create({
        data: {
          fullName,
          email,
          role: "ATHLETE",
        },
      });
      return NextResponse.json({ success: true, user }, { status: 201 });
    }

    // 2. Handle Facility Registration (Creates User AND Facility together)
    if (type === "facility") {
      const user = await prisma.user.create({
        data: {
          fullName,
          email,
          role: "FACILITY_OWNER",
          facilities: {
            create: {
              name: facilityName,
              address: city || "Madurai",
              city: city || "Madurai",
            },
          },
        },
      });
      return NextResponse.json({ success: true, user }, { status: 201 });
    }

    return NextResponse.json({ error: "Invalid registration type" }, { status: 400 });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Failed to create account" }, { status: 500 });
  }
}
