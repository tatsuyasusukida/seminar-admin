import Link from "next/link";

export default function SeminarImport () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">講習の取り込み</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/seminars">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
        </ul>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="csv" className="form-label">CSV</label>
            <input type="file" name="csv" id="csv" className="form-control" />
          </div>
          <Link href="/seminars/import/finish">
            <a className="btn btn-outline-primary">取り込み</a>
          </Link>
        </form>
      </div>
    </main>
  )
}
