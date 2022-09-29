import { Card } from "antd";
import { useHistory } from "react-router-dom";
import { ReactComponent as IconHeart } from "../../assets/icon/heart.svg";

const ProductItem = ({ active, setHeartItems, product }) => {
    const router = useHistory();
    return (
      <Card
        hoverable
        style={{
          background: "transparent",
          border: 0,
          position: "relative"
        }}
        onClick={() => router.push(`/product/${product.id}`)}
        cover={
          <img
            alt="example"
            //   className="rounded-full"
            className="w-[100%] max-w-[345px] mx-auto mt-[60px]"
            // style={{ borderRadius: "50%" }}
            src={product.img}
          />
        }>
        <IconHeart
          className={`absolute md:top-4 md:right-4 top-0 right-0 cursor-pointer z-[1] ${
            active ? "icon-heart" : ""
          }`}
          onClick={setHeartItems}
        />
        <p className="md:pb-[50px]">{product.title}</p>
      </Card>
    );
  };
export default ProductItem;