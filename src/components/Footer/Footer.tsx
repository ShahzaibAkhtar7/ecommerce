export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8 rounded-t-2xl">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
        <div className="text-2xl font-bold">MyStore</div>
        <div className="flex flex-col md:flex-row gap-6">
          <a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
          <a href="/about" className="hover:text-green-300 transition duration-300">About</a>
          <a href="/terms" className="hover:text-blue-300 transition duration-300">Terms</a>
        </div>
      </div>
      <div className="border-t border-white mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
        <p>Copyright © MyStore</p>
        <a href="#top" className="flex items-center gap-2 hover:text-orange-300 transition duration-300">
          Back to top
          <span className="border border-white p-1 rounded-sm">⬆</span>
        </a>
      </div>
    </footer>
  );
}
