import useSWR from "swr";
import Image from "next/image";
import { useEffect, useState } from "react";
import { findAllSwags } from "../../util/airtable";
import { handleUpvote } from "../../util/increaseVote";
import Lottie from "react-lottie";
import animationData from "./lottieheart.json";

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
  const defaultOptions = {
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const {
    desc = "no description",
    name = "no such item",
    itemId,
    image = [{ url: "https://via.placeholder.com/300" }],
  } = props;
  const [disabled, setDisabled] = useState(false);
  const [tooltipMsg, setToolTipMsg] = useState("upvote me");
  const [success, setSuccess] = useState(false);
  const [localVote, setLocalVote] = useState(0);
  const fetcher = (url) => fetch(url).then((res) => res.json());

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
        setToolTipMsg("Thanks for voting!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center w-full px-8 md:px-4 py-10 mx-auto">
      <div className="card glass lg:card-side text-neutral-content">
        <div className="relative">
          <figure className="p-6 ">
            <Image
              src={image[0].url}
              className="rounded-2xl"
              alt={"product detail"}
              height={300}
              width={300}
              priority
            />
          </figure>

          <div className="absolute right-12 md:right-4 lg:right-0 bottom-4">
            <div
              className={`${
                success && "animate-bling"
              } badge pt-4 pb-3 px-4 bg-red-400 border-none`}
              onAnimationEnd={() => setSuccess(false)}
            >
              ❤ {localVote}
            </div>
          </div>
          {success ? (
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <Lottie options={defaultOptions} height={200} width={200} />
            </div>
          ) : null}
        </div>

        <div className="max-w-lg card-body border-l-2 border-white border-dashed border-opacity-10 text-black">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>

          <div className="card-actions">
            <div data-tip={tooltipMsg} className="tooltip tooltip-right">
              <button
                className="animate-bounce glass rounded-lg pb-1 pt-2 px-8 text-lg hover:bg-green-400 disabled:animate-none disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50"
                onClick={handleClick}
                disabled={isValidating || disabled}
              >
                👍
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwagItem;
