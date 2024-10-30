// pages/404.tsx
import Link from "next/link";
import Image from "next/image";
import errorImage from "../assets/404.svg"; // Add your error image to the assets folder

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center bg-gray-100">
      <Image
        src={errorImage}
        alt="404 Error"
        className="mb-6"
        width={400}
        height={300}
      />
      <h1 className="text-5xl font-bold text-gray-800">Oops!</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </Link>
      <Link href="/packages" className="mt-2 text-blue-500 hover:underline">
        Explore Packages
      </Link>
    </div>
  );
};

export default Custom404;
