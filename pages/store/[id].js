import useSWR from "swr";
import { useEffect, useState } from "react";
import { findAllSwags } from "../../util/airtable";
import { handleUpvote } from "../../util/increaseVote";
import RedirectComponent from "../../components/redirect";

// increase vote - mario theme coin sound effect
// home page use island illustration
// a page for playground you can drag and drop the itme image to play around with it?
export async function getStaticProps(context) {
  const myData = await findAllSwags();
  const swag = myData.find(
    (data) => data.itemId.toString() === context.params.id
  );
  if (!swag) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: swag,
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

const SwagItem = (props) => {
  const { desc, name, itemId, image } = props;
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [localVote, setLocalVote] = useState(0);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  if (!props.itemId) {
    return <RedirectComponent />;
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
    setLocalVote(localVote + 1);
    setSuccess(true);
    try {
      const res = await handleUpvote(itemId);
      if (res) {
        setDisabled(true);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  return (
    <div class="flex items-center justify-center w-full px-4 py-10 mx-auto border-black border-4">
      <div class="card glass lg:card-side text-neutral-content">
        <div className="relative">
          <figure class="p-6">
            <img src={image[0].url} class="max-w-sm rounded-2xl shadow-xl" />
          </figure>
          <div class="absolute right-2 top-4">
            <div
              className={`${
                success && "animate-bling"
              } badge p-4 bg-red-400 border-none`}
              onTransitionEnd={() => setSuccess(false)}
            >
              ❤ {localVote}
            </div>
          </div>
        </div>

        <div class="max-w-md card-body">
          <h2 class="card-title">{name}</h2>
          <p>{desc}</p>

          <div class="card-actions">
            <button
              className=" glass rounded-full p-4 text-lg hover:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50"
              onClick={handleClick}
              disabled={isValidating || disabled}
            >
              + 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwagItem;
