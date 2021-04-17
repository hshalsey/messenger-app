import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class InputBox extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Send was clicked.');
      // Button.
    }

    return (
      // <div className='input-container'>
      //   <input
      //     id='msg-input'
      //     className='msg-input'
      //     type='text'
      //     placeholder='Message...'
      //   />
      // </div>

      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Message'
          aria-label='Message'
          aria-describedby='basic-addon2'
        />
        <InputGroup.Append>
          <Button onClick={handleClick} variant='outline-secondary'>
            Send
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default InputBox;