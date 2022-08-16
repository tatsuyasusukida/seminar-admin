import Link from "next/link";

export default function EntryJudge () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">申込の審査</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/applications/1">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
        </ul>
        <p>申込を承認するには承認ボタンをクリックしてください。</p>
        <form>
          <Link href="/applications/1/judge/finish">
            <a className="btn btn-primary">承認</a>
          </Link>
        </form>
      </div>
    </main>
  )
}
