import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export async function GET(req: Request) {
  try {
    const projects = await getDocs(collection(db, "projects")).then((qs) => {
      return qs.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    });
    return (
      Response.json(projects, {status: 200})
    )
  } catch (error) {
    return (
      Response.json(error, {status: 500})
    )
  }
}