"use client"
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"

export default function newLetter(){
    const [letterData, setLetterData] = useState("");

    const addLetter = async () => {
        try{
            const letterCollectionRef = collection(db, "letters");
            await addDoc(letterCollectionRef, {
                letter: letterData,
            });
        }
        catch(err){
            console.log(err)
        }
        alert("Letter submited")
    }

    return(
        <div className="w-full p-5 h-screen grid grid-cols-1 justify-items-center">
            <textarea onChange={(e) => setLetterData(e.target.value)} className="lg:w-1/2 w-full lg:h-96 h-full border border-gray-300 px-5 shadow-md rounded-md" placeholder="Enter your generic cover letter here. . ."></textarea>
            <br />
            <button onClick={addLetter} className="bg-slate-900 rounded-md mt-3 shadow-md lg:w-1/2 w-full h-10 text-white cursor-pointer hover:bg-slate-800">Submit</button>
        </div>
    )
}