import Link from "next/link";

export default function EntryJudge () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">仮申込の審査</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/entries/1">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
        </ul>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="bill" className="form-label">請求書の内容</label>
            <input type="text" name="bill" id="bill" className="form-control" />
          </div>
          <Link href="/entries/1/judge/finish">
            <a className="btn btn-primary">承認</a>
          </Link>
        </form>
      </div>
    </main>
  )
}
