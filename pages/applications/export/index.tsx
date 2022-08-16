import Link from "next/link";

export default function ApplicationList () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">申込の出力</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/applications">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
        </ul>
        <p className="mb-3">
          CSV出力ボタンをクリックするとCSVファイルのダウンロードが開始します。
        </p>
        <button className="btn btn-primary">CSV出力</button>
      </div>
    </main>
  )
}
