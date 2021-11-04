import { useRouter } from "next/router";
import Link from "next/link";

const SwagStore = (props) => {
  const router = useRouter();
  return (
    <div>
      <h1>Swag Store {router.query.slug}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />

      <Link href={`/dummy-store/foo`}>
        <a>Dummy store Foo</a>
      </Link>
    </div>
  );
};

export default SwagStore;
