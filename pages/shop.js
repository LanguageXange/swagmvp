import React, { useEffect, useState } from "react";
import { handleCreateItem } from "../util/createItem";
const MyStore = () => {
  const [data, setData] = useState(null);
  const [num, setNum] = useState(1);
  useEffect(() => {
    async function createShopData() {
      const res = await handleCreateItem(num);
      setData(res);
    }

    createShopData();
  }, [num]);

  return (
    <div>
      My store
      <h1>Items from Airtable</h1>
      {data ? data.name : "loading..."}
      <div>
        Num is {num}
        <br />
        <input type="number" onChange={(e) => setNum(e.target.value)} />
        <button>look for item</button>
      </div>
    </div>
  );
};

export default MyStore;
