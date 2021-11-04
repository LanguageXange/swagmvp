import Link from "next/link";
import { findAllSwags } from "../../util/airtable";

export async function getStaticProps(context) {
  const myData = await findAllSwags();
  return {
    props: { ...myData },
  };
}

const SwagStore = (props) => {
  const itemsArr = Object.values(props);

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>

      <div className="w-full grid grid-cols-3 gap-4 mx-auto max-w-7xl">
        {itemsArr.map((item) => {
          return (
            <div class="justify-center items-center bg-white shadow-lg rounded-lg ">
              <Link href={`/store/${item.itemId}`}>
                <a>Go to this item</a>
              </Link>
              <div class=" p-4 justify-start flex flex-col">
                <h4 class="border-b-2 text-3xl" id="whoobe-3mr7n">
                  {item.name} - {item.itemId}
                </h4>
                <div className="py-3 my-2 mx-auto border-b-2 border-indigo-600 w-6/12">
                  {item.image ? (
                    <img src={item.image[0].url} alt={item.name} />
                  ) : (
                    <img
                      src="https://via.placeholder.com/300"
                      alt={item.name}
                    />
                  )}
                </div>

                <p class="my-4">{item.desc}</p>
                <div className="flex gap-5 w-full bg-blue-300 justify-center items-center ">
                  <button
                    value="button"
                    class="w-max  my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500"
                  >
                    {item.votes}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SwagStore;
