import Link from "next/link";

export default function MemberJudge () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">会員の審査</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/members/1">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
        </ul>
        <p className="mb-3">
          会員登録を承認するには承認ボタンをクリックしてください。
        </p>
        <Link href="/members/1/judge/finish">
          <a className="btn btn-primary">承認</a>
        </Link>
      </div>
    </main>
  )
}
