import Link from "next/link";

export const Sample = () => {
  return (
    <div className="flex justify-center bg-gray-300 h-[100dvh] items-center">
      <Link href="/">
        <h1 className="sm:text-4xl md:text-6xl lg:text-9xl">サンプルページ1</h1>
      </Link>
    </div>
  );
};
export default Sample;
