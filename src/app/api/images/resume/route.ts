import { doc, getDocFromServer } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const resume = await getDocFromServer(doc(db, "images", "resume")).then((doc) => doc.data());
    return (
      Response.json(resume.url, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      })
    )
  } catch (error) {
    return (
      Response.json({error},{
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      })
    )
  }
}