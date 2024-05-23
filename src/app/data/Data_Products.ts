import img1 from "@/images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import img2 from "@/images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg";
import img3 from "@/images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg";
import img4 from "@/images/product/team-fredi-8HRKoay8VJE-unsplash.jpeg";
import img5 from "@/images/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg";
import img6 from "@/images/product/anis-m-WnVrO-DvxcE-unsplash.jpeg";

export const category = [
  {
    name: "New Arrivals",
    products: [
      {
        id: 1,
        name: "Tree pot",
        price: 25,
        details: "Original package design from house",
        news: "New Arrival",
        image: img1,
        favourite: true,
        link: "Tree-pot",
        Description:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
        numbers: 5,
      },
      {
        id: 2,
        name: "Fashion set",
        price: 35,
        details: "Costume package",
        news: "Discounted Price",
        image: img2,
        favourite: false,
        link: "Fashion-set",
        Description:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
        numbers: 5,
      },
      {
        id: 3,
        name: "Juice Drinks",
        price: 45,
        details: "Nature made another world",
        news: "",
        image: img3,
        favourite: false,
        link: "Juice-Drinks",
        Description:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
        numbers: 5,
      },
    ],
  },
  {
    name: "Popular",
    products: [
      {
        id: 1,
        name: "Package",
        price: 50,
        details: "Original package design from house",
        news: "Trending",
        image: img4,
        favourite: false,
        link: "Package",
        Description:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
        numbers: 5,
      },
      {
        id: 2,
        name: "Bottle",
        price: 100,
        details: "Package design",
        news: "",
        image: img5,
        favourite: true,
        link: "Bottle",
        Description:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
        numbers: 5,
      },
      {
        id: 3,
        name: "Medicine",
        price: 200,
        details: "Original design from house",
        news: "",
        image: img6,
        favourite: false,
        link: "Medicine",
        Description:
          "Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
        numbers: 5,
      },
    ],
  },
];

// Generic function to fetch products by category
export const fetchProductsByCategory = async (category:any) => {
  // Replace spaces and special characters in the category name
  let formattedCategory = category.replace(/ /g, '%20').replace(/'/g, '%27');
  const response = await fetch(`https://fakestoreapi.com/products/category/${formattedCategory}`);
  if (response.ok) {
    const products = await response.json();
    return products;
  } else {
    console.error("HTTP error:", response.status);
    return null;
  }
};

// Specific function to fetch women's clothing
export const fetchWomensClothing = async () => {
  return await fetchProductsByCategory("women's clothing");
};

// Specific function to fetch men's clothing
export const fetchMensClothing = async () => {
  return await fetchProductsByCategory("men's clothing");
};

// Using the functions to fetch and log the products


const getRandomProducts = (products:any, count:any) => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getProducts = async () => {
  const womensProducts = await fetchWomensClothing();
  const mensProducts = await fetchMensClothing();

  const combinedProducts = [...womensProducts, ...mensProducts];
  const randomProducts = getRandomProducts(combinedProducts, 6);
return randomProducts
};

