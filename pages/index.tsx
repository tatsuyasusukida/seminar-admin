import Link from "next/link";

export default function Home () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">ホーム</h1>
        <div className="d-grid gap-2">
          <Link href="/members">
            <a className="btn btn-outline-primary">会員一覧</a>
          </Link>
          <Link href="/seminars">
            <a className="btn btn-outline-primary">講習一覧</a>
          </Link>
          <Link href="/entries">
            <a className="btn btn-outline-primary">仮申込一覧</a>
          </Link>
          <Link href="/applications">
            <a className="btn btn-outline-primary">申込一覧</a>
          </Link>
        </div>
      </div>
    </main>
  )
}
