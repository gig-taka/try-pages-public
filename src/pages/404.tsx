import Link from "next/link";

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-300 h-[100dvh] items-center">
      <Link href="/">
        <h1 className="sm:text-4xl md:text-5xl lg:text-7xl">
          お探しのページが見つかりません
        </h1>
      </Link>
      <div className="text-2xl">- 404 -</div>
    </div>
  );
};

export default Error404;
