import Image from 'next/image';

export default function Login() {
    return (
        <div>
            <div className="w-full min-h-screen bg-black">
                <Image src="/stj2.png" width={100} height={70} alt="secondary" className="rounded-t-lg mx-auto h-50" />

                <div className="bg-white mx-auto p-5 rounded-2xl w-full max-w-md">
                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-2xl font-semibold">Sign in to your account</h2>
                    </div>

                    <form className="w-full max-w-md px-4 flex flex-col items-center space-y-6">
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full border border-gray-500 rounded-md px-5 py-4 focus:outline-none focus:ring-1 focus:ring-black-500 text-md"
                            />
                        </div>

                        <div className="w-full">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-500 rounded-md px-5 py-4 focus:outline-none focus:ring-1 focus:ring-black-500 text-md"
                            />
                            <div className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                            </div>
                        </div>

                        <div className="text-sm text-right text-gray-700 hover:text-red-500 cursor-pointer">
                            Forgot password?
                        </div>

                        <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}