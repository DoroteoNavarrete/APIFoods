import React from 'react';
import styled from 'styled-components'
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitDefault = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <FormStyle onSubmit={submitDefault}>
      <div>
        <button>
          <FaSearch />
        </button>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;

  :hover{
    transform: scale(1.01);
  }

  div{
    width: 40%;
    position: relative;
  }

  input {
    background: var(--bg-black-gradient);
    font-size: 1.5rem;
    color: var(--text-white-900);
    padding: 0.5rem 3.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: var(--text-white-900);
    font-size: 1.2rem;
  }

  button {
    border-radius: 1rem;
    position: absolute;
    display: flex;
    left: 0;
    top: 50%;
    border: none;
    transform: translate(0%, -50%);
    background: #423f73;
    height: 100%;
    width: 3.5rem;
  }

  button:hover {
    background: var(--bg-black-gradient);
    cursor: grab;
  }
`

export default Search