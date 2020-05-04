import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";

export class OrderForm extends Component {
  render() {
    return (
      <form class={"container"}>
        <div class={"row"}>
          <div class={"col"}>
            <MDBInput label="First Name" size="sm" />
          </div>
          <div class={"col"}>
            <MDBInput label="Last Name" size="sm" />
          </div>
        </div>
        <div class={"row"}>
          <div class={"col"}>
            <MDBInput label="Address" size="sm" />
          </div>
        </div>
        <div class={"row"}>
          <div class={"col"}>
            <MDBInput label="Email" size="sm" />
          </div>
        </div>
        <div class={"row"}>
          <div class={"col"}>
            <MDBInput label="Credit Card Number" size="sm" />
          </div>
        </div>
        <div class={"row"}>
          <div class={"col"}>
            <MDBInput label="Card Expiration Date" size="sm" />
          </div>
          <div class={"col"}>
            <MDBInput label="Card Security Code" size="sm" />
          </div>
          <div class={"col"}>
            <MDBInput label="Card Zipcode" size="sm" />
          </div>
        </div>
        <div class={"row"}>
          <div class={"col"}>
            <MDBBtn type="submit" color="primary">Submit Order</MDBBtn>
          </div>
        </div>
      </form>
    );
  }
}
