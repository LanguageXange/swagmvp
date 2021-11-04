import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { findAllSwags } from "../../util/airtable";
import { handleUpvote } from "../../util/increaseVote";
// update the votes in the db
export async function getStaticProps(context) {
  const myData = await findAllSwags();
  return {
    props:
      myData.find((data) => data.itemId.toString() === context.params.id) || {},
  };
}

export async function getStaticPaths() {
  const myData = await findAllSwags();
  const mypaths = myData.map((data) => {
    return {
      params: {
        id: data.itemId.toString(),
      },
    };
  });
  return {
    paths: mypaths,
    fallback: true,
  };
}

// API resolved without sending a response for /api/updateVotes,
const SwagItem = (props) => {
  const { desc, name, votes, itemId } = props;
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [localVote, setLocalVote] = useState(0);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  if (!props.itemId) {
    return <div>no such item</div>;
  }
  const { data, isValidating } = useSWR(
    `/api/getItemByid?id=${itemId}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setLocalVote(data.votes);
    }
  }, [data]);

  const handleClick = async () => {
    try {
      const res = await handleUpvote(itemId);
      if (res) {
        setLocalVote(localVote + 1);
        setDisabled(true);
        setSuccessMessage("voted");
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  return (
    <div>
      <h1>Swag SwagItem {itemId} </h1>

      <h2>{name}</h2>
      <h3>{desc}</h3>
      {isValidating ? <p>Loading...</p> : <p>SWR: {data.votes}</p>}
      <h3>{localVote}</h3>
      <h3>error: {errorMessage}</h3>

      <h3>successMessage: {successMessage}</h3>
      <button
        value="button"
        class="w-max my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500 disabled:opacity-20 disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={isValidating || disabled}
      >
        +1
      </button>
      <img src={"/asset/rocket_green.svg"} />
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default SwagItem;
