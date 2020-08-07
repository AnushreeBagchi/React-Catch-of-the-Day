import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) return null;
    if ( !isAvailable) {
      return <li key={key}>Sorry {fish ? fish.name: 'fish'} is no longer available</li>;
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };
  render() {
    const { fishes, order } = this.props;
    if (!order) {
        return null;
    }
    const orderIds = Object.keys(order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const price = fish && fish.price;
      const count = order[key];
      if (fish && fish.status == "available") {
        return prevTotal + price * count;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>Total: {formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
