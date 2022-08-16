import Link from "next/link";

export default function ApplicationList () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">申込一覧</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="/applications/export">
              <a className="btn btn-outline-primary">出力...</a>
            </Link>
          </li>
        </ul>
        <nav aria-label="一覧">
          <ul className="list-group">
            {Array.from(Array(5).keys()).map((i) => (
              <li className="list-group-item" key={i}>
                <Link href="/applications/1">
                  <a>日時が入ります、ここに講習名が入ります、氏名が入ります</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}
