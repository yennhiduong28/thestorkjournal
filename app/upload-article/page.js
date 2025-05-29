import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="bg-red-800 h-5"></nav>
      <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
        <div className="flex items-center">
          <Image src="/stj.png" alt="logo" width={100} height={70} className="h-11" />
        </div>
      </header>

      {/* Title */}
      <div className="text-center py-10">
        <p className="text-5xl font-semibold text-gray-800">Upload Article</p>
      </div>

      {/* Form */}
      <form className="max-w-3xl mx-auto px-6 space-y-6">
        <textarea
          placeholder="Category"
          className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
        />
        <input
          type="text"
          placeholder="Title"
          className="w-full  border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
        />
        <textarea
          placeholder="Summary"
          className="w-full w-60 h-24 border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
        />
        <textarea
          placeholder="Content"
          className="w-full border w-96 h-64 border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
        />
        <input
          type="url"
          placeholder="Thumbnail URL"
          className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
        />
      </form>

      {/* Submit Button */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-red-800 transition duration-300">
          Submit Article
        </button>
      </div>

      {/* Footer spacing */}
      <div className="py-10"></div>
    </div>
  );
}