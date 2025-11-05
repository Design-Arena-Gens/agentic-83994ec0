import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      <div className="card">
        <p className="greeting">Hi there 👋</p>
        <p className="message">
          Welcome to this tiny agent-crafted Next.js project. Feel free to explore.
        </p>
        <div className="actions">
          <Link href="https://nextjs.org" target="_blank" rel="noreferrer">
            Next.js Docs
          </Link>
          <Link href="https://vercel.com" target="_blank" rel="noreferrer">
            Deploy on Vercel
          </Link>
        </div>
      </div>
    </main>
  );
}
