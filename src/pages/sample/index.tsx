import Link from "next/link";
import { useState } from "react";

export const Sample = () => {
  const [a, b] = useState(false);
  return (
    <div>
      <div
        aria-hidden={a}
        className="flex flex-col justify-center h-[100dvh] items-center md:text-xl lg:text-2xl"
      >
        <span className="sr-only">このページはtalkbackテストページです</span>
        <Link href="/">
          <h1>サンプルページ1</h1>
        </Link>
        <h2 aria-label="かじょうがきえいです">箇条書きA</h2>
        <ol>
          <li>項目１</li>
          <li>項目２</li>
          <li>項目３</li>
          <li>項目４</li>
        </ol>
        <h2 aria-label="かじょうがきびーです">箇条書きB</h2>
        <ul>
          <li aria-label="デプロイされた時間です">
            {process.env.BUILD_DATETIME}
          </li>
          <li className="hidden">display: none</li>
          <li className="invisible">visibility: hidden</li>
          <li>読み上げる</li>
          <li aria-hidden="true">読み上げない</li>
        </ul>
        <h2>まとめて読み上げる</h2>
        <Link href="/">
          <div>たらこパスタ</div>
          <div>1,200円</div>
          <div>たらこの風味を生かしたシンプルで美味しい料理です</div>
        </Link>
        <h2>個別に読み上げる</h2>
        <div>
          <div>たらこパスタ</div>
          <div>1,200円</div>
          <div>たらこの風味を生かしたシンプルで美味しい料理です</div>
        </div>
        <a href="https://www.yahoo.co.jp">リンク</a>
        {!a && (
          <button
            className="p-2 border rounded-md m-4 bg-green-300"
            onClick={() => b(true)}
          >
            ダイアログ
          </button>
        )}
        <Link href="/" aria-label="トップページにもどります">
          <h1 className="text-2xl">戻る</h1>
        </Link>
      </div>
      {a && (
        <div className="fixed left-0 top-0 w-[100dvw] h-[100dvh] bg-blue-200 flex flex-col justify-center items-center md:text-xl lg:text-2xl">
          <h1>モーダルダイアログ</h1>
          <button
            className="p-2 border rounded-md m-4 bg-blue-300"
            onClick={() => b(false)}
            aria-label="ダイアログを閉じます"
          >
            閉じる
          </button>
        </div>
      )}
    </div>
  );
};
export default Sample;
