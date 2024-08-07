import Link from "next/link";

export const Sample = () => {
  return (
    <div className="flex flex-col justify-center h-[100dvh] items-center md:text-xl lg:text-2xl">
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
      <Link href="/">
        <h1 className="text-2xl">戻る</h1>
      </Link>
    </div>
  );
};
export default Sample;
