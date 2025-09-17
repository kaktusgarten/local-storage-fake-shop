export const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("EIN API FETCH FEHLER IST AUFGETRETEN !!");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
