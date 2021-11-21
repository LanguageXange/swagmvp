import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className="my-16 mx-auto max-w-lg space-x-4 text-center">
      <Link href="/">
        <a>
          <Image
            src="/no-connection.gif"
            alt="no connection"
            height={500}
            width={650}
          />
          Page not found
        </a>
      </Link>
    </div>
  );
};

export default Card;
