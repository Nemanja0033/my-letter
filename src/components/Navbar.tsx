import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="w-full flex bg-slate-50 shadow-md h-12 justify-center items-center gap-2">
            <h1 className="font-bold">MyLetters</h1>
            <Link className="border-l px-3" href={'/newletter'}>Add Letter</Link>
            <Link href={'/letters'}>Use Letters</Link>
        </nav>
    )
}