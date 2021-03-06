import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gray-400 bg-opacity-50">
        <div className="max-h-full w-1/2 mx-auto py-24 ">
          <Image
            src="/static/island.svg"
            className="hover:transform skew-y-12"
            alt="island"
            width={1200}
            height={800}
          />
        </div>
      </div>

      <footer>Made by Cindy Lin ©2021-2022</footer>
    </>
  );
}
