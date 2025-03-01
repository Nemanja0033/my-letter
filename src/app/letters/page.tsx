import { db } from "@/utils/firebase"
import { collection, getDocs, query } from "firebase/firestore"

async function getLetters() {
    const q = query(collection(db, "letters"));
    const data = await getDocs(q);
    const letters = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return letters;
}

export default async function lettersPage(){
    const letters = await getLetters();
    return(
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 place-items-center">
            
        </div>
    )
}