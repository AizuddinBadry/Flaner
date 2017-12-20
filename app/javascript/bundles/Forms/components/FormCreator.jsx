import React, {Component} from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { draftToMarkdown } from 'markdown-draft-js';


export default class FormCreator extends Component {
  constructor(props) {
  super(props);
    this.state = {
      title: '',
      description: '',
      showPhoto: this.props.checked || false,
      photo: '',
      photoWidth: '',
      photoHeight: '',
      editorState: EditorState.createEmpty(),
      editorData: ''
    };
  }

  onFileChange = (e) => {
      var self = this;
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
            console.log('no files');
      }
        console.log(files);
        console.log(files[0])
        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onload = function(upload) {
            self.setState({
            photo: upload.target.result
        }, function() {
            console.log(self.state.photo);
        });
        };
        reader.readAsDataURL(file);
    }

  handleChanges = (e) => {
    var self = this;
    self.setState({[e.target.name]:[e.target.value]})
  }

  handleShowPhoto = (e) => {
      this.setState({showPhoto: e.target.checked});
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  render(){
    const {title, photo, photoHeight, photoWidth, showPhoto, editorState, description, editorData} = this.state;
    return(
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
                      <input type="text" class="form-control" name="title" value={title} onChange={this.handleChanges}/>
                    </div>
                    <div class="form-group">
                      <label for="title">Description</label>
                      <input type="text" class="form-control" name="description" value={description} onChange={this.handleChanges}/>
                    </div>
                    <div class="form-group">
                      <label for="title"><input type="checkbox" name="showPhoto" checked={showPhoto} onChange={this.handleShowPhoto}/>Show Product Image ?</label>
                      {showPhoto ? <p><input type="file" name="file" onChange={this.onFileChange}/></p> : ''}
                      {photo ? <div class="col-xs-2">Width:<input type="text" class="form-control" name="photoWidth" value={photoWidth} onChange={this.handleChanges} placholder='Width'/></div> : ''}
                      {photo ? <div class="col-xs-2">Height:<input type="text" class="form-control" name="photoHeight" value={photoHeight} onChange={this.handleChanges} placholder='Height'/></div> : ''}
                    </div>
                     <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                      />
                    <div class="box-footer">
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
                <div class="card-body">
                  <center><h2>{title}</h2>
                  <hr/>
                  <p>{photo ? <img src={photo} width={photoWidth} height={photoHeight}/> : ''}</p>
                  </center>
                  <div dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) }}/>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <p><button class="btn btn-block btn-primary ripple">Save</button></p>
            </div>
          </div>

      )
  }
}