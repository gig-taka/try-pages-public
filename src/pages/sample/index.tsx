import Link from "next/link";
import { useState } from "react";

export const Sample = () => {
  const [a, b] = useState(false);
  return (
    <div>
      <div
        aria-hidden={a}
        className="flex flex-col justify-center h-[100dvh] items-center md:text-xl lg:text-2xl overflow-auto"
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
        <div className="fixed left-0 top-0 w-[100dvw] h-[100svh] bg-blue-200 flex flex-col justify-center items-center md:text-xl lg:text-2xl overflow-auto">
          <h1>モーダルダイアログ</h1>
          <h2>まとめて読み上げる</h2>
          <Link href="/">
            <div>たらこパスタ</div>
            <div>1,200円</div>
            <div>たらこの風味を生かしたシンプルで美味しい料理です</div>
          </Link>
          <h2>個別に読み上げる</h2>
          <article>
            <div>たらこパスタ</div>
            <div>1,200円</div>
            <div>たらこの風味を生かしたシンプルで美味しい料理です</div>
          </article>
          <h2>画像のaltに商品名を入れる</h2>
          <img src="img.jpg" className="w-24" alt="親子丼" />
          <h2>画像のaltに商品説明を入れる</h2>
          <img
            src="img.jpg"
            className="w-24"
            alt="親子丼は、柔らかく煮込んだ鶏肉と半熟の卵を甘辛いだしで味付けし、ふっくらとしたご飯の上にのせた日本の伝統的な丼物です。ねぎをアクセントに加え、シンプルながらも深い味わいが楽しめます。栄養バランスも良く、手軽に食べられるため、忙しい日の昼食や夕食にぴったりです。"
          />
          <h2>画像のaltに商品名まとめて読み上げる</h2>
          <Link href="/" className="flex gap-2 h-[300px] justify-center">
            <div className="flex flex-col">
              <img src="img.jpg" alt="親子丼" className="w-24" />
              <div>親子丼</div>
              <div>850円</div>
            </div>
            <div className="w-[60%]">
              親子丼は、柔らかく煮込んだ鶏肉と半熟の卵を甘辛いだしで味付けし、ふっくらとしたご飯の上にのせた日本の伝統的な丼物です。ねぎをアクセントに加え、シンプルながらも深い味わいが楽しめます。栄養バランスも良く、手軽に食べられるため、忙しい日の昼食や夕食にぴったりです。
            </div>
          </Link>
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
