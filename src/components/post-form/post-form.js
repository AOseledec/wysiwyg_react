import React, {useState} from 'react';
import { connect } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

import { fetchAddPost } from '../../actions';
import { compose } from 'redux';
import { withPostsStoreService } from '../hoc';

import './post-form.css'

const PostForm = ({ fetchAddPost }) => {
  const nowDate = new Date().toDateString();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editor, setEditor] = useState(EditorState.createEmpty());
  const [isAllert, setAllert] = useState(false);

  const clearState = () => {
    setTitle('');
    setAuthor('');
    setEditor(EditorState.createEmpty())
  };

  const onSubmit = e => {
    e.preventDefault();
    fetchAddPost({
      title,
      content: draftToHtml(convertToRaw(editor.getCurrentContent())),
      author,
      date: nowDate
    });
    setAllert(true)
    clearState();
  };

  const onChange = e => {
    let value = e.currentTarget.value
    switch (e._targetInst.pendingProps.id) {
      case 'title':
        setTitle(value)
        break;
      case 'author':
        setAuthor(value)
        break;
      default:
        console.log('Error in "switch case"');
        break;
    };
  };

  const onClickAllert = () => {
    setAllert(false);
  };

  const Allert = (
    <div  onClick={onClickAllert} className="alert alert-success" role="alert">
      <h4 className="alert-heading">Успех!</h4>
      <p>Пост отправлен</p>
    </div>);

  const onEditorStateChange = editorState => {
    setEditor(editorState)
  };

  return (
    <div className="container">
      {isAllert && Allert}
      <form  onSubmit={onSubmit}>
        <div className="form-group col-md-2">
          <label htmlFor="title">Title</label>
          <input value={title} onChange={onChange} type="text" className="form-control-lg" id="title" placeholder="Title" required/>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="content">Content</label>
          <Editor
            editorState={editor}
            wrapperClassName="editor-wrapper"
            editorClassName="editor-editor"
            onEditorStateChange={onEditorStateChange}
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="author">Author</label>
          <input value={author} onChange={onChange} type="text" className="form-control-lg" id="author" placeholder="author" required/>
        </div>

        <div className="form-group col-md-2">
          <button type="submit" className="btn btn-primary btn-lg">Отправить</button>
        </div>
      </form>
    </div>
  );
};


const mapDispatchToProps = (dispatch, { postsStoreService }) => () => {
  return {
    fetchAddPost: (post) => fetchAddPost(postsStoreService, dispatch)(post)
  }
};

export default compose(
  withPostsStoreService(),
  connect(null, mapDispatchToProps)
)(PostForm);
