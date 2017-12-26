import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';

class Cart extends Component {
  render() {
    return (
      <div class="row">
        <h3>Product Information</h3>
      </div>
    );
  }
}

export default class CustomerInformation extends Component {
  render() {
    return (
      <div class="test">
        <center>
          <h1>Checkout Overview</h1>
        </center>
        <Cart />
        <div class="row">
          <div class="col-md-12">
            <h3>Customer Information</h3>
            <hr />
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Phone"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                class="form-control form-control-lg"
                id="address"
                rows="3"
                placeholder="Address"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Poscode"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="City"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <select class="form-control form-control-lg" id="exampleSelect1">
                <option value="38">WP Kuala Lumpur</option>
                <option value="25">Johor</option>
                <option value="26">Kedah</option>
                <option value="27">Kelantan</option>
                <option value="28">Melaka</option>
                <option value="29">Negeri Sembilan</option>
                <option value="30">Pahang</option>
                <option value="1217">Penang</option>
                <option value="32">Perak</option>
                <option value="33">Perlis</option>
                <option value="36">Sabah</option>
                <option value="37">Sarawak</option>
                <option value="34">Selangor</option>
                <option value="35">Terengganu</option>
                <option value="39">WP Labuan</option>
                <option value="40">WP Putrajaya</option>
              </select>
            </div>
          </div>
          <div className="col-md-12 center">
            <Button variant="raised" color="primary">
              Proceed Payment
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
