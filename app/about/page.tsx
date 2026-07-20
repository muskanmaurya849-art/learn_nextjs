import '../globals.css'
export default function Page(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div  className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">This is the about page of my Next.js app.</div>
            <h1 className="text-2xl font-bold">This is my about page.</h1>
            <p>Welcome to Study Hub. This website helps students learn programming, prepare for exams, and improve their skills.</p>
            <p>I created this website because I wanted one place to keep my notes, projects, and learning resources.</p>
            <p>Our mission is to make learning simple, free, and easy for everyone.</p>
        </main>
    );
}