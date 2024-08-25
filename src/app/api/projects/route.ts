import { collection, getDocsFromServer } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const revalidate = 600;

export async function GET(req: Request) {
  try {
    const projects = await getDocsFromServer(collection(db, "projects")).then((qs) => {
      return qs.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    });
    return (
      Response.json(projects, {
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