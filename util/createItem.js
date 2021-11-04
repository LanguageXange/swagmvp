export const handleCreateItem = async (id) => {
  try {
    const mydata = {
      itemId: id,
      name: "Pencil",
      desc: "new pencil",
      price: 2.99,
      votes: 1,
    };
    // relative path is fine here because it's called on static page ?
    const res = await fetch("/api/createItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mydata),
    });
    const response = await res.json();

    return response;
  } catch (err) {
    console.log(err, "something went wrong ");
    res.status(500).json({ msg: "id not defined" });
  }
};
