import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../newTodo/styles.css";

const NewTodo = ({ onNewTodo }) => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");

  //apagar //
  const erase = () => {
    setValue("")
  };

  //enviar// 
  const submit = () => {
    if( onNewTodo ){
      onNewTodo(value);
      erase();
    }
    
  }

   //em mudança //
  const onChange = (event) => {
    setValue(event.target.value);
  }

  //na chave para baixo //
  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };
  
return(
  <input className="new-todo" 
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={ onChange }
      onKeyDown={ onKeyDown }
      />
    
);
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo