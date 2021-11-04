import { table, findSwagById } from "../../util/airtable";
const createSwagItem = async (req, res) => {
  // add placeholder images for new item
  const { itemId, name, desc, price, votes } = req.body;
  try {
    if (req.method === "POST") {
      const swag = await findSwagById(itemId);
      if (swag.length !== 0) {
        res.status(200).json(swag);
      } else {
        table.create(
          {
            name,
            desc,
            price,
            votes,
            image: [{ url: "https://via.placeholder.com/300" }],
          },
          function (err, record) {
            if (err) return;
            res.status(200).send(record.fields);
          }
        );
      }
    } else {
      res.status(200).json({ msg: "get request!" });
    }
  } catch (err) {
    console.error("oops", err);
  }
};

export default createSwagItem;
