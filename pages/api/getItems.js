import { findAllSwags } from "../../util/airtable";
const getSwags = async (req, res) => {
  try {
    const swag = await findAllSwags();
    if (swag.length !== 0) {
      res.status(200).json(swag);
    } else {
      res.json({ msg: "error fetching swags" });
    }
  } catch (err) {
    console.error("oops", err);
  }
};

export default getSwags;
