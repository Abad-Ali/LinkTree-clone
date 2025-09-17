// export async function GET() {
//     return Response.json({ message: 'api is working' })
//   }

import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    const body = await request.json()

    const client = await clientPromise;
    const db = client.db("Linktree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the Linktree
    const doc = await collection.findOne({handle: body.handle})

    if (doc){
      return Response.json({ success: false, error: true, message: 'This Linktree already exists!', result: null })
    }

    const result = await collection.insertOne(body)
     
    return Response.json({ success: true, error: false, message: 'Your Linktree has been generated!', result: result,  })
  }