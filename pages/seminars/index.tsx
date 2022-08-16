import Link from "next/link";

export default function SeminarList () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">講習一覧</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="/seminars/import">
              <a className="btn btn-outline-primary">取り込み...</a>
            </Link>
          </li>
        </ul>
        <table className="table">
          <thead>
            <tr>
              <th>講習名</th>
              <th>日程</th>
              <th>申込状況</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(5).keys()).map((i) => (
              <tr key={i}>
                <td>ここに講習名が入ります</td>
                <td>2022年8月16日(火)</td>
                <td>申込10名／定員50名</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
