import Image from "next/image";
import Link from "next/link";
const Card = ({ title }) => {
  return (
    <div className="my-8 mx-auto max-w-lg bg-white rounded-xl shadow-md flex items-center space-x-4">
      <Link href="/">
        <a>
          <h2>{title}</h2>
          <Image
            src="/asset/no-connection.gif"
            alt="no connection"
            height={500}
            width={650}
          />
        </a>
      </Link>
    </div>
  );
};

export default Card;
