import Link from "next/link";

export default function MemberJudgeFinish () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">申込の審査が完了しました</h1>
        <p className="mb-3">
          会員宛に受講票が添付されたメールが送信されました。
        </p>
        <Link href="/applications/1">
          <a className="btn btn-success">戻る</a>
        </Link>
      </div>
    </main>
  )
}
