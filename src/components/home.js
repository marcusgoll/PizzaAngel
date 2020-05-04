import React, { Component } from "react";
import { OrderForm } from "./orderForm";

export class Home extends Component {
  render() {
    return (
      <div style={styles.parentContainer}>
        <div style={styles.childBox}>
          <OrderForm />
        </div>
      </div>
    );
  }
}

const styles = {
  parentContainer: {
    width: "100vw",
    height: "90vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  childBox: {
    width: "40%",
    height: "60%",
    border: "1px solid #CCC",
    borderRadius: "16px",
  }
};
