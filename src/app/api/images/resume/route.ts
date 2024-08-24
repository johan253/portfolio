import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

export async function GET(req: Request) {
  try {
    const resume = await getDoc(doc(db, "images", "resume")).then((doc) => doc.data());
    return (
      Response.json(resume.url, {status: 200})
    )
  } catch (error) {
    return (
      Response.json(error, {status: 500})
    )
  }
}