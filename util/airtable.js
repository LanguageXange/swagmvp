const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

export const table = base("My-inventory");

export const findSwagById = async (id) => {
  const itemRecord = await table
    .select({
      filterByFormula: `itemId=${id}`,
    })
    .firstPage();

  if (itemRecord.length !== 0) {
    return itemRecord[0].fields;
  }
  return [];
};

export const findAllSwags = async () => {
  const records = await table.select().all();
  if (records) {
    return records.map((record) => record.fields);
  }
};

export const searchSwagById = async (id) => {
  const itemRecord = await table
    .select({
      filterByFormula: `itemId=${id}`,
    })
    .firstPage();
  // we want to return the record id in order to update the votes
  if (itemRecord.length !== 0) {
    return { fields: itemRecord[0].fields, id: itemRecord[0].id };
  }
  return null;
};
