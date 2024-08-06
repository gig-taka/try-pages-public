import Link from "next/link";

export const Sample = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-300 h-[100dvh] items-center">
      <Link href="/">
        <h1 className="sm:text-4xl md:text-6xl lg:text-9xl">サンプルページ1</h1>
      </Link>
      <ul className="my-6">
        <li className="hidden">display: none</li>
        <li className="invisible">visibility: hidden</li>
        <li>読み上げる</li>
        <li aria-hidden="true">読み上げない</li>
      </ul>
      <Link href="/">
        <h1 className="text-2xl">戻る</h1>
      </Link>
    </div>
  );
};
export default Sample;
