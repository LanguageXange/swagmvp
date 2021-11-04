export const getShopItem = async () => {
  // need absolute path here
  // it seems Next js doesn't recommend
  const res = await fetch("http://localhost:3000/api/hello");
  const mydata = await res.json();

  return mydata;
};

// Note: You should not use fetch() to call an API route in getStaticProps.
// Instead, directly import the logic used inside your API route.
// You may need to slightly refactor your code for this approach.
// Fetching from an external API is fine!
