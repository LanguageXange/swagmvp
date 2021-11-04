const someData = [
  { slug: "foo", item: "sticker", id: 123 },
  { slug: "bar", item: "hoodie", id: 143 },
  { slug: "food", item: "food", id: 14563 },
];
export default function handler(req, res) {
  res.status(200).json(someData);
}
