import Link from "next/link";

export default function MemberJudgeFinish () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">会員の審査が完了しました</h1>
        <p className="mb-3">
          会員宛にIDとパスワードが記載されたメールが送信されました。
        </p>
        <Link href="/members/1">
          <a className="btn btn-success">戻る</a>
        </Link>
      </div>
    </main>
  )
}
