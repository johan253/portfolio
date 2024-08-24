import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

export async function GET(req: Request) {
  try {
    const johan = await getDoc(doc(db, "images", "johan")).then((doc) => doc.data());
    return (
      Response.json(johan.url, {status: 200})
    )
  } catch (error) {
    return (
      Response.json(error, {status: 500})
    )
  }
}