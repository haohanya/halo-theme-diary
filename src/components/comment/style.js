import styled from 'styled-components';

export const CommentWrapper = styled.div`
  position: relative;
  margin: 2rem 0;
  label {
    position: relative;
    display: block;
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  input, textarea {
    width: 100%;
    border: none;
    background-color: #1d1f21;
    border-bottom: solid 1px #444;
    outline: none;
  }
  #content-label {
    min-height: 10rem;
  }
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    overflow-y:visible;
    min-height: 10rem;
  }
  #allowNotification-label {
    margin: 2rem 0;
    width: 10rem;
    height: 1rem;
    .span-active {
      background-color: #444;
      border-radius: .3rem;
      color: #eee;
    }
    input {
      display: none;
    }
  }
  
  .comment-btns {
    label {
      display: inline-block;
    }
  }
  button {
    display: inline-block;
    width: 5rem;
    height: 2rem;
    background-color: #1d1f21;
    border: none;
    outline: none;
    font-size: 1.6rem;
  }
`
