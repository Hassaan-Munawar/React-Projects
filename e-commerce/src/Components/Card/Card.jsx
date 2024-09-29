import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
const { Meta } = Card;

function Cards({ item }) {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/singleProduct/${item.id}`, { state: { item } });
  };

  return (
    <Card
      style={{ width: "100%" }}
      cover={<img alt="example" src={item.image} className="img-fluid" />}
      actions={[
        <Button className="m-3" onClick={goToPage} type="primary">
          View Product
        </Button>,
      ]}
    >
      <Meta
        avatar={<img src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" alt="avatar" className="rounded-circle" />}
        title={item.title}
        description={item.description}
      />
    </Card>
  );
}

export default Cards;

