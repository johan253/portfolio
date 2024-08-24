import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

export async function GET(req: Request) {
  const resume = await getDoc(doc(db, "images", "resume")).then((doc) => doc.data());
  return (
    Response.json(resume, {status: 200})
  )
}