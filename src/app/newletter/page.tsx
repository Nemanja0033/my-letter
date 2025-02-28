export default function newLetter(){
    return(
        <div className="w-full p-5 h-screen grid grid-cols-1 justify-items-center">
            <textarea className="lg:w-1/2 w-full lg:h-96 h-full border border-gray-300 px-5 shadow-md rounded-md" placeholder="Enter your generic cover letter here. . ."></textarea>
            <br />
            <button className="bg-slate-900 rounded-md mt-3 shadow-md lg:w-1/2 w-full h-10 text-white cursor-pointer hover:bg-slate-800">Submit</button>
        </div>
    )
}