import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sport, city, maxBudget, failureReason } = body;

    // Save the failed search query directly to the Neon database
    const demandEvent = await prisma.demandEvent.create({
      data: {
        sport,
        city: city || "Madurai",
        maxBudget: parseFloat(maxBudget),
        matched: false,
        failureReason: failureReason || "NO_FACILITY",
      },
    });

    return NextResponse.json({ 
      status: "success", 
      message: "Demand intelligence logged", 
      data: demandEvent 
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ 
      status: "error", 
      message: "Failed to log demand event" 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch live intelligence for the Admin Dashboard
    const totalEvents = await prisma.demandEvent.count();
    const recentEvents = await prisma.demandEvent.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    return NextResponse.json({ totalEvents, recentEvents }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch intelligence" }, { status: 500 });
  }
}

