import Link from "next/link";
import { findAllSwags } from "../../util/airtable";
import Image from "next/image";

export async function getStaticProps(context) {
  const myData = await findAllSwags();
  return {
    props: { ...myData },
  };
}

const SwagStore = (props) => {
  const itemsArr = Object.values(props).sort((a, b) => a.itemId - b.itemId);

  return (
    <div className="w-full p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 mx-auto max-w-7xl ">
      {itemsArr.map((item) => {
        return (
          <div
            className="glass card bordered justify-between hover:bg-black hover:bg-opacity-30 hover:text-white"
            key={item.itemId}
          >
            <figure className="px-20 py-8">
              <Image
                src={item.image[0].url}
                alt={item.name}
                width={500}
                height={500}
              />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title">
                {item.name}
                {item.tag ? (
                  <div className="badge mx-2 badge-secondary">{item.tag}</div>
                ) : null}
              </h2>
              <p className="flex-1">{item.desc}</p>
              <div className="justify-end card-actions">
                <Link href={`/store/${item.itemId}`}>
                  <a className="btn btn-info hover:bg-blue-700 hover:border-blue-700">
                    More info
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SwagStore;

{
  /* <div className="justify-center items-center bg-white shadow-lg rounded-lg ">
              <Link href={`/store/${item.itemId}`}>
                <a>Go to this item</a>
              </Link>
              <div className=" p-4 justify-start flex flex-col">
                <h4 className="border-b-2 text-3xl" id="whoobe-3mr7n">
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

                <p className="my-4">{item.desc}</p>
                <div className="flex gap-5 w-full bg-blue-300 justify-center items-center ">
                  <button
                    value="button"
                    className="w-max  my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500"
                  >
                    {item.votes}
                  </button>
                </div>
              </div>
            </div> */
}
