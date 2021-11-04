import { useRouter } from "next/router";
import Link from "next/link";
import { getShopItem } from "../../util/getItem";

export async function getStaticProps(context) {
  const myData = await getShopItem();
  return {
    props: myData.find((data) => data.slug === context.params.dummy),
  };
}

// export function getStaticPaths() {
//   return {
//     paths: [
//       { params: { dummy: "foo" } },
//       { params: { dummy: "bar" } },
//       { params: { dummy: "food" } },
//     ],
//     fallback: true,
//   };
// }

export async function getStaticPaths() {
  const myData = await getShopItem();
  const mypaths = myData.map((data) => {
    return {
      params: {
        dummy: data.slug,
      },
    };
  });
  return {
    paths: mypaths,
    fallback: true,
  };
}

const Dummy = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  return (
    <div>
      <h1>Swag Store {props.slug}</h1>
      <h2>Item: {props.item}</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />

      <Link href={`/swag-store/random`}>
        <a>Dynamic Route to random</a>
      </Link>
    </div>
  );
};

export default Dummy;
