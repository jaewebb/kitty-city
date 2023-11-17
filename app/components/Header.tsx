import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex px-5 bg-white drop-shadow">
      <div className="logo-font self-center">
        <i className="fa-solid fa-building mr-2" />
        Kitty City
        <i className="fa-regular fa-building ml-1" />
      </div>
      <nav className="ml-auto self-center">
        <Link href="/" className="mr-5">
          Home
        </Link>
        <Link href="/favorites" className="mr-5">
          Favorites
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
