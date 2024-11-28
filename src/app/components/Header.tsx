import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">pure pearls</div>
      <nav className="space-x-6">
        <Link href="/" passHref>
          <a className="text-gray-700 hover:text-gray-900">Home</a>
        </Link>
        <Link href="/about" passHref>
          <a className="text-gray-700 hover:text-gray-900">About</a>
        </Link>
        <Link href="/shop" passHref>
          <a className="text-gray-700 hover:text-gray-900">Shop</a>
        </Link>
        <Link href="/contact" passHref>
          <a className="text-gray-700 hover:text-gray-900">Contact</a>
        </Link>
      </nav>
      <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Sign Up</button>
    </header>
  );
};

export default Header;
