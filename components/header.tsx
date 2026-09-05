import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex h-14 itmes-center justify-between border-b
            border-zinc-200 px-4 py-4 sm:px-6"
    >
      <Link href="/" className="flex items-center gap-3 font-semibold">
        <Image src="/next.svg" alt="" width={89} height={18} priority />
      </Link>
      <nav
        className="flex itmes-center gap-4 text-sm font-medium
              text-zinc-600"
      >
        <Link href="/" className="hover:text-zinc-950">
          Home
        </Link>
        <Link href="/posts" className="hover:text-zinc-950">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
