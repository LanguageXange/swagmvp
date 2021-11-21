import useSWR from "swr";
import { useEffect, useState } from "react";
const RankPage = () => {
  const [updateData, setUpdateData] = useState([]);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isValidating } = useSWR(`/api/getItems`, fetcher);
  useEffect(() => {
    if (data) {
      setUpdateData(data);
    }
  }, [data]);

  const sortedData = updateData.sort((a, b) => b.votes - a.votes);
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
        {isValidating ? (
          <div className="text-center text-2xl px-auto">loading .... </div>
        ) : (
          <tbody>
            {sortedData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price == 0 ? "FREE" : `$${item.price}`}</td>
                  <td>{item.votes}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default RankPage;
