import Image from "next/image";

import Card from "../components/card";
// use daisy ui
// https://daisyui.com/docs/install
// let's try add lottie animation!
export default function Home() {
  return (
    <>
      <div className="bg-black opacity-75">
        <div className="max-h-full w-1/2 mx-auto py-16 ">
          <img src="/asset/island.svg" className="hover:transform skew-y-12" />
        </div>
      </div>
      <footer>©2021-2022</footer>
    </>
  );
}
