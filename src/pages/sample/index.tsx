import Link from "next/link";

export const Sample = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-800 h-[100dvh] items-center">
      <Link href="/">
        <h1 className="sm:text-4xl md:text-6xl lg:text-9xl">サンプルページ1</h1>
      </Link>
      <ul className="my-6 md:text-xl lg:text-2xl">
        <li aria-label="デプロイされた時間です">
          {process.env.BUILD_DATETIME}
        </li>
        <li className="hidden">display: none</li>
        <li className="invisible">visibility: hidden</li>
        <li>読み上げる</li>
        <li aria-hidden="true">読み上げない</li>
      </ul>
      <div className="sr-only">
        たらこパスタです。たらこの風味を生かしたシンプルで美味しい料理です。千二百円です
        <div aria-hidden="true">たらこパスタ</div>
        <div aria-hidden="true">1,200円</div>
        <div aria-hidden="true">
          たらこの風味を生かしたシンプルで美味しい料理です
        </div>
      </div>
      <Link href="/">
        <h1 className="text-2xl">戻る</h1>
      </Link>
    </div>
  );
};
export default Sample;
