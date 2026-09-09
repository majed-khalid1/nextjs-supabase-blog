import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex h-16 items-center justify-between border-b
            border-zinc-200 px-4 sm:px-6"
    >
      <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
        Next Blog
      </Link>
      <nav
        className="flex items-center gap-4 text-lg font-bold
              text-zinc-950"
      >
        <Link href="/" className="transition hover:text-blue-600">
          Home
        </Link>
        <Link href="/posts" className="transition hover:text-blue-600">
          Posts
        </Link>
        <Link href="/login" className="transition hover:text-blue-600">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
