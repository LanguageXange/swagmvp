import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";
import Card from "../components/card";
import { useContext } from "react";
import { StoreContext, StoreActionType } from "./_app";

export default function Home() {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <div>
      <Head>
        <title>Vote Swag</title>

        <meta name="description" content="Vote your fav swag" />
      </Head>
      <NavBar />
      <button
        onClick={() =>
          dispatch({
            type: StoreActionType.FETCH_SWAG_ITEMS,
            payload: [1, 2, 3, 4, 5],
          })
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {" "}
        Fetch Items - Current Item : {state.items.length}
      </button>

      <button
        onClick={() =>
          dispatch({
            type: StoreActionType.CLEAR_ITEMS,
          })
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Clear Items
      </button>

      {state.items.map((item) => {
        return <div className="box">stuff</div>;
      })}

      <main>
        <div class="m-10 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-gray-500">You have a new message!</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </main>
      <div class="px-5 shadow-inner bg-blue-400 rounded-lg h-18 space-x-4 max-w-md mx-auto my-4">
        stuff
      </div>
    </div>
  );
}
