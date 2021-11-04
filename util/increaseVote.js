export const handleUpvote = async (id) => {
  try {
    // relative path is fine here because it's called on static page ?
    const res = await fetch("/api/updateVotes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const response = await res.json();

    return response;
  } catch (err) {
    console.log(err, "something went wrong ");
  }
};
