import { findSwagById } from "../../util/airtable";
const getSwagById = async (req, res) => {
  const { id } = req.query;
  try {
    const swag = await findSwagById(id);

    if (swag.length !== 0) {
      res.status(200).json(swag);
    } else {
      res.json({ meg: "id not found" });
    }
  } catch (err) {
    console.error("oops", err);
  }
};

export default getSwagById;
