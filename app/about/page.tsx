import '../globals.css'
export default function Page() {return (
    <main>

        <section className="py-10 px-20 text-black bg-white dark:bg-white-500">
        <h1 className="text-5xl font-bold">About Study Hub</h1>
        </section>

        <section className="max-w-7xl mx-auto py-10 px-20 text-black bg-white dark:bg-white-500">
        <h2 className="text-3xl font-bold">Who Am I?</h2>
        <p className="mt-4">I created this website to organize my notes, assignments,
        and projects in one place.</p>
        </section>

        <section className="max-w-7xl mx-auto py-10 px-20 text-black bg-white dark:bg-white-300">
        <div className="grid grid-cols-3 gap-4 align-items-top ">
            <div className="bg-gray-500 p-4 rounded-lg text-white mt-4 border border-white-300 shadow-lg bg-sky-500 hover:bg-sky-700 ...">
                <h2 className="text-3xl font-bold text-white py-4">What is Study Hub?</h2>
                <div className="rounded-lg mt-4 shadow-lg hover:scale-1"><img src="/student.jpg" alt="student.jpg" width="500" height="333"></img></div>
                <p>Study Hub is a platform that allows students to easily access and manage their study materials. It provides a centralized location for notes, assignments, and projects, making it easier for students to stay organized and focused on their studies.</p>

            </div>
        
            <div className="rounded-lg mt-4 shadow-lg"><img src="/student.jpg" alt="student.jpg" width="500" height="333"></img></div>

            <div className="rounded-lg mt-4 shadow-lg hover:scale-1"><img src="/student.jpg" alt="student.jpg" width="500" height="333"></img></div>
        </div>
        </section>
    </main>
    );
}