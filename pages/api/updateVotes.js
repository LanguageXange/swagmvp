import { table, searchSwagById } from "../../util/airtable";

// PUT request
const updateVotes = async (req, res) => {
  if (req.method === "PUT") {
    const { id } = req.body;
    // to update the record we need the record id NOT the fields.itemId !!!
    try {
      const swag = await searchSwagById(id);
      if (swag) {
        table.update(
          swag.id,
          {
            votes: swag.fields.votes + 1,
          },
          function (err, record) {
            if (err) {
              res.status(500).json({ error: err });
              return;
            }
            res
              .status(200)
              .json({ votes: record.fields.votes, meg: "updated!" });
          }
        );
      } else {
        res.status(404).json({ meg: "swag not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};

export default updateVotes;
