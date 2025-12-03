import { Send } from "lucide-react"

const Messages = () => {
    return (
        <section className="w-screen max-w-6xloverflow-hidden">
            <div className="grid grid-cols-2 h-screen">
                <div className="bg-secondary w-full h-full">

                </div>
                <div className="px-6 py-20 md:px-10 lg:px-20 flex flex-col gap-4">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-blue-500">Send In Your Messages</h1>
                    <p className="text-text-secondary text-sm">Your prayer requests, contributions, questions etc.</p>
                    <form method="get">
                        <div className="flex flex-col gap-3">
                            <input type="text" placeholder="Your Name" className="p-2 border rounded-lg"/>
                        <textarea  placeholder="Type Here" className="p-2 border rounded-lg"></textarea>
                        <button type="submit" className="btn-primary w-30 flex justify-center items-center gap-x-2">Send <span><Send /></span> </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Messages