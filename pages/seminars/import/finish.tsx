import Link from "next/link";

export default function SeminarImportFinish () {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-3 mb-3">講習の取り込み完了</h1>
        <p>講習の取り込みが完了しました。</p>
        <Link href="/seminars">
          <a className="btn btn-success">戻る</a>
        </Link>
      </div>
    </main>
  )
}
