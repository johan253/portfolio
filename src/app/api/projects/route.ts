import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export async function GET(req: Request) {
  const projects = await getDocs(collection(db, "projects")).then((qs) => {
    return qs.docs.map((doc) => ({id: doc.id, ...doc.data()}))
  });
  return (
    Response.json(projects, {status: 200})
  )
}