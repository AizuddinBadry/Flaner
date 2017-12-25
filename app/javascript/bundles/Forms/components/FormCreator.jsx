import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { draftToMarkdown } from 'markdown-draft-js';
import axios from 'axios';

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  componentDidMount = () => {
    var self = this;
    self.props.products.forEach(function(product) {
      var totalPrice = self.state.total;
      totalPrice += product.price;
      self.setState({ total: totalPrice });
    });
  };

  render() {
    var self = this;
    const { total } = this.state;
    const listing = self.props.products.map((index, i) => (
      <tr key={i + 1}>
        <td>{i + 1}</td>
        <td>{index.name}</td>
        <td>RM{index.price}</td>
      </tr>
    ));
    return (
      <div>
        <h5 class="box-title mr-b-0">Product Information</h5>
        <hr />
        <table class="table">
          <thead>
            <tr class="">
              <th>No.</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{listing}</tbody>
        </table>
      </div>
    );
  }
}

export default class FormCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      editorState: EditorState.createEmpty(),
      editorData: '',
      productsList: [],
      product: [],
      addProducts: false,
      allowCDM: false
    };
  }

  componentDidMount = () => {
    var self = this;
    axios
      .get('/api/user/product/list')
      .then(function(response) {
        self.setState({ productsList: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get('/api/user/form/list')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onSaveForm = e => {
    var self = this;
    axios
      .post('/api/user/form/new', {
        title: self.state.title,
        description: draftToHtml(
          convertToRaw(self.state.editorState.getCurrentContent())
        ),
        products: self.state.product,
        type: 'product'
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChanges = e => {
    var self = this;
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    self.setState({ [e.target.name]: value });
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  onAddingItem = item => {
    var self = this;
    var key = item.target.id;
    var val = item.target.value;
    var obj = '';
    obj = {
      id: key,
      name: val,
      price: item.target.dataset['price'],
      stock: item.target.dataset['stock'],
      productID: item.target.dataset['id']
    };
    const value =
      item.target.type === 'checkbox' ? item.target.checked : item.target.value;
    var newArray = self.state.product.slice();

    if (item.target.checked) {
      newArray.push(obj);
      self.setState({ obj, product: newArray });
    } else {
      var index = newArray
        .map(function(d) {
          return d['id'];
        })
        .indexOf(item.target.id);
      if (index > -1) {
        newArray.splice(index, 1);
      } //remove element
      self.setState({ obj, product: newArray }); //update state
    }
  };

  render() {
    var self = this;
    const {
      title,
      photo,
      photoHeight,
      photoWidth,
      showPhoto,
      editorState,
      description,
      editorData,
      productsList,
      product,
      allowCDM
    } = this.state;

    const product_list = productsList.map((index, i) => (
      <tr key={i + 1}>
        <td>{i + 1}</td>
        <td>{index.name}</td>
        <td>
          <div class="checkbox checkbox-circle checkbox-color-scheme">
            <label class="checkbox-checked">
              <input
                type="checkbox"
                id={i}
                data-id={index._id.$oid}
                data-stock={index.stock}
                data-price={index.price}
                value={index.name}
                checked={self.state[index.id]}
                onChange={this.onAddingItem}
              />{' '}
              <span class="label-text">Add ?</span>
            </label>
          </div>
        </td>
      </tr>
    ));

    return (
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="card form-card">
            <div class="card-header">
              <h4 class="card-title m-b-0">Form Editor</h4>
            </div>
            <div class="card-body">
              <div class="box-body">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    name="title"
                    value={title}
                    onChange={this.handleChanges}
                  />
                </div>
                <div class="form-group">
                  <label for="title">Description</label>
                  <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                  />
                </div>

                <div class="form-group">
                  <label for="title">Available products</label>
                  <table class="table table-bordered">
                    <tbody>{product_list}</tbody>
                  </table>
                </div>

                <div class="form-group">
                  <label for="title">Payment options</label>
                  <table class="table table-bordered">
                    <tbody>{product_list}</tbody>
                  </table>
                </div>

                <div class="form-group">
                  <label for="title">Other options</label>
                  <div class="checkbox checkbox-circle checkbox-color-scheme">
                    <label class="checkbox-checked">
                      <input type="checkbox" />{' '}
                      <span class="label-text">Allow partial payment</span>
                    </label>
                  </div>
                  <div class="checkbox checkbox-circle checkbox-color-scheme">
                    <label class="checkbox-checked">
                      <input
                        type="checkbox"
                        name="allowCDM"
                        value={allowCDM}
                        onChange={this.handleChanges}
                      />{' '}
                      <span class="label-text">Allow CDM payment</span>
                    </label>
                  </div>

                  {allowCDM ? (
                    <div>
                      <label for="title">Available banks</label>
                      <table class="table table-bordered">
                        <tbody>{product_list}</tbody>
                      </table>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="card form-card">
            <div class="card-header">
              <h4 class="card-title m-b-0">Live Preview</h4>
            </div>
            <p class="text-primary" style={{ fontSize: 12 }}>
              Note: This is an example how your form will look like. To see
              functional form please save this form.{' '}
            </p>
            <div class="card-body">
              <center>
                <h2>{title}</h2>
                <hr />
              </center>
              <div
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(
                    convertToRaw(editorState.getCurrentContent())
                  )
                }}
              />
              <ProductListing products={product} />
              <div class="col-md-12 widget-holder">
                <div class="widget-bg">
                  <div class="widget-body clearfix">
                    <h5 class="box-title mr-b-0">Customer Information</h5>
                    <hr />
                    <form class="has-validation-callback">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Name</label>
                            <input class="form-control" id="l30" type="text" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Phone</label>
                            <input class="form-control" id="l30" type="text" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              class="form-control"
                              id="l30"
                              type="text"
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Address</label>
                            <textarea class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Poscode</label>
                            <input class="form-control" id="l30" type="text" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>City</label>
                            <input
                              type="email"
                              class="form-control"
                              id="l30"
                              type="text"
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <label>Province</label>
                          <select class="form-control">
                            <option value="38">Wp Kuala Lumpur</option>
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
                            <option value="39">Wp Labuan</option>
                            <option value="40">Wp Putrajaya</option>
                          </select>
                          <br />
                        </div>
                      </div>
                    </form>
                    <button class="btn btn-block btn-blue ripple">
                      Proceed Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <br />
          <p>
            <button
              class="btn btn-block btn-primary ripple"
              onClick={this.onSaveForm}
            >
              Save
            </button>
          </p>
        </div>
      </div>
    );
  }
}
