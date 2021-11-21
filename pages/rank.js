import { findAllSwags } from "../util/airtable";
export async function getStaticProps() {
  const myData = await findAllSwags();
  return {
    props: { ...myData },
  };
}

const RankPage = (props) => {
  const itemsArr = Object.values(props).sort((a, b) => b.votes - a.votes);
  return (
    <div className="flex justify-center mx-auto my-12 ">
      <table className="table table-zebra w-11/12 md:w-9/12 bg-white">
        <thead>
          <tr>
            <th></th>
            <th className="w-1/2">Product Name</th>
            <th>Price</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {itemsArr.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RankPage;
