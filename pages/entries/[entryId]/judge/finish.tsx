import Link from "next/link";

export default function MemberJudgeFinish () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">仮申込の審査が完了しました</h1>
        <p className="mb-3">
          会員宛に請求書が添付されたメールが送信されました。
        </p>
        <Link href="/entries/1">
          <a className="btn btn-success">戻る</a>
        </Link>
      </div>
    </main>
  )
}
