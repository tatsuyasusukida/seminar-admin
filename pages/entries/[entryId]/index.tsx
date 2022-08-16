import Link from "next/link";

export default function MemberDetail () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">仮申込詳細</h1>
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link href="/entries">
              <a className="btn btn-outline-secondary">戻る</a>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="/entries/1/judge">
              <a className="btn btn-outline-primary">審査...</a>
            </Link>
          </li>
        </ul>
        <dl className="mb-3">
          <dt>登録日時</dt>
          <dd>ここに登録日時が入ります</dd>

          <dt>講習</dt>
          <dd>ここに講習名が入ります</dd>

          <dt>氏名</dt>
          <dd>ここに氏名が入ります</dd>
        
          <dt>連絡先</dt>
          <dd>ここに連絡先が入ります</dd>
        
          <dt>請求書の有無</dt>
          <dd>ここに請求書の有無が入ります</dd>
        </dl>
      </div>
    </main>
  )
}
