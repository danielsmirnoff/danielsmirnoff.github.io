export default function Footer() {
  return (
    <footer className="border-t-2 border-[#fca311] bg-[#14213d]">
        <div className="py-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Daniel Smirnoff. All rights reserved.
        </div>
    </footer>
  )
}