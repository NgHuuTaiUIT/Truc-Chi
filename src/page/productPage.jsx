import { Button, Card, List, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { ReactComponent as IconHeart } from "../assets/icon/heart.svg";
import { ReactComponent as IconChevronDown } from "../assets/icon/chevron-down.svg";
import { getProducts } from "../utils/getData";
import { useHistory } from "react-router-dom";
import { chunkArray } from "../utils";
import { useWindowSize } from "../hooks/useWindowSize";
import ProductItem from "../components/ProductItem/ProductItem";

const count = 1;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const ListProduct = ({ products }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(1);
  const size = useWindowSize();
  useEffect(() => {
    if(size.width >= 1440){
      setCount(3);
    }else if(size.width < 1440 && size.width >= 768){
      setCount(2);
    }else {
      setCount(1);
    }
  }, [size]);

  useEffect(() => {
    // fetch(fakeDataUrl)
    //   .then(res => res.json())
    //   .then(res => {
    //     setInitLoading(false);
    //     setData(res.results);
    //     setList(res.results);
    //   });
    setInitLoading(false);
    // setData(res.results);
    setList([products.filter((_, idx) => idx < count)]);
    // setList([products]);
    // setList(chunkArray(products,3));
  }, [products,count]);

  const onLoadMore = () => {

    if(limit >= count)
    {
      setLimit(1);
      setLoading(true);
      setList([products.filter((_, idx) => idx < count)]);
      setLoading(false);
      return;
    }

    setLimit(limit + 1);
    setLoading(true);
    // setList(
    //   data.concat(
    //     [...new Array(count)].map(() => ({
    //       loading: true,
    //       name: {},
    //       picture: {}
    //     }))
    //   )
    // );
    // fetch(fakeDataUrl)
    //   .then(res => res.json())
    //   .then(res => {
    //     const newData = data.concat(res.results);
    //     setData(newData);
    //     setList(newData);
    //     setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //     // In real scene, you can using public method of react-virtualized:
    //     // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

    //     window.dispatchEvent(new Event("resize"));
    //   });

    // setData(newData);
    setList(pre => [
      ...pre,
      products.filter(
        (_, idx) => idx + 1 <= (limit + 1) * count && idx + 1 > limit * count
      )
    ]);
    setLoading(false);
    window.dispatchEvent(new Event("resize"));
  };

  const loadMore =
    !initLoading && !loading && products.length > count ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          // position:'absolute',
          // bottom: -60,
          // left:'50%'
          // marginBottom: 120
        }}>
        <IconChevronDown
          onClick={onLoadMore}
          className={`mx-auto cursor-pointer ${limit >= count ? 'rotate-180' : ''}`}
        />
      </div>
    ) : null;
  return (
    <List
      className="border-none demo-loadmore-list py-[127px] overflow-hidden transition-all duration-500 relative" style={{height: 'fit-content'}}
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      rowKey={item => item.id}
      renderItem={item => (
        <List.Item className="!border-0">
          <Skeleton avatar title={false} loading={item.loading} active>
            {/* <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            /> */}
            <div className="grid justify-between w-full md:grid-cols-2 xl:grid-cols-3 grid-cols-1 md:gap-[40px] gap-[20px]">
              {item.map(product => (
                <ProductItem product={product} active />
              ))}
            </div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};


const ProductPage = () => {
  const products = getProducts();
  return (
    <div>
      <div
        className="fluid min-h-[363px] flex "
        style={{
          backgroundImage: "url(../../assets/images/header-product.png)",
          backgroundPositionX: "20%"
        }}>
        <h1>Sản phẩm</h1>
      </div>
      <div className="max-w-[80%] mx-auto pt-[127px] ">
        <h4 className="text-left mb-[72px]">Sản phẩm được yêu thích nhất</h4>
        {/* <ListProduct /> */}
        <div className="mb-[127px] grid justify-between w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px]">
          <ProductItem product={products[0]} />
          <ProductItem product={products[1]} />
          <ProductItem product={products[2]} />
        </div>
      </div>

      <div
        className="pt-[127px] pb-[82px]"
        style={{ background: "url(../../assets/images/banner-product-2.png)" }}>
        <h1 className="mx-auto w-[80%] text-right">
          Nghệ thuật <br />
          tạo hình
        </h1>
      </div>

      <div className="max-w-[80%] mx-auto transition-all">
        <ListProduct products={products}/>
      </div>

      <div
        className="min-h-[490px] flex items-end"
        style={{ background: "url(../../assets/images/banner-product-3.png)" }}>
        <h1 className="w-full mb-[35px] text-center">
          Nghệ thuật ứng dụng
        </h1>
      </div>

      <div className="max-w-[80%] mx-auto transition-all">
        <ListProduct products={products}/>
      </div>
    </div>
  );
};

export default ProductPage;
