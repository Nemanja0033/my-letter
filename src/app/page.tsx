import AddLetter from "@/components/AddLetter";
import UseLetter from "@/components/UseLetter";

export default function Home(){
  return(
    <div className="w-full h-screen p-5 lg:flex flex-row justify-center gap-3 items-center">
      <AddLetter />
      <UseLetter />
    </div>
  )
}