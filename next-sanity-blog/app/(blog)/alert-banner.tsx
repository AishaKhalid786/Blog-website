import Link from "next/link";

export default function AlertBanner() {
  
  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex items-center justify-between px-4 h-14"
    >
      <div className="py-2 text-center text-sm font-semibold">
       BLOGS.
      </div>
      <nav className="flex space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-cyan-700">Home</Link>
        <Link href="/About" className="hover:text-cyan-700">About</Link>
        <Link href="/Contact" className="hover:text-cyan-700">Contact</Link>



      </nav>
    </div>
  );
}
