import { cloneDeep } from "lodash";
// import datas from "../assets/data/data_offline.json";

// export const getCategories = id => {
//   return datas.categories;
// };

// eslint-disable-next-line no-sparse-arrays
const products = [
  {
    title: "Product 1",
    img: "../../assets/images/product-1.png",
    id: "1",
    key: "1"
  },
  {
    title: "Product 2",
    img: "../../assets/images/product-2.png",
    id: "2",
    key: "2"
  },
  {
    title: "Product 3",
    img: "../../assets/images/product-3.png",
    id: "3",
    key: "3"
  },
  {
    title: "Product 4",
    img: "../../assets/images/product-4.png",
    id: "4",
    key: "4"
  },
  {
    title: "Product 5",
    img: "../../assets/images/product-5.png",
    id: "5",
    key: "5"
  },
  {
    title: "Product 6",
    img: "../../assets/images/product-6.png",
    id: "6",
    key: "6"
  },
  {
    title: "Product 7",
    img: "../../assets/images/product-7.png",
    id: "7",
    key: "7"
  },
  {
    title: "Product 8",
    img: "../../assets/images/product-8.png",
    id: "8",
    key: "8"
  },
  {
    title: "Product 9",
    img: "../../assets/images/product-9.png",
    id: "9",
    key: "9"
  }
];

export const getData = () => {
  let data;
  const api = async () => {
    await fetch(`${process.env.PUBLIC_URL}/assets/data/data.json`, {
      method: "GET"
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json"
      // }
    })
      .then(res => console.log(res.json()))
      .then(data => {
        console.log(data);
        const tempData = cloneDeep(JSON.parse(data));
        data = cloneDeep(tempData);
      });
  };
  api();
  return data;
};

export const getProducts = () => {
  return products;
};
