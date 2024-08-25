import { doc, getDocFromServer } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

export async function GET(req: Request) {
  try {
    const johan = await getDocFromServer(doc(db, "images", "johan")).then((doc) => doc.data());
    return (
      Response.json(johan.url, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      })
    )
  } catch (error) {
    return (
      Response.json(error, {status: 500})
    )
  }
}