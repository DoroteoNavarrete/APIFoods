import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import styled from 'styled-components'
import { useState } from 'react'



function StyleSwitcher() {

  const [activeStyle, setActiveStyle] = useState(true);

  const updateStyle = () => {
    if(activeStyle)
      setActiveStyle(false);
    else
      setActiveStyle(true);
      document.body.classList.toggle('dark')
  }

  return (
    <Icon>
      <ButtonDN onClick={updateStyle}>
      {activeStyle ? <FaMoon /> : <FaSun />}     
      </ButtonDN>
    </Icon>
  )
}

const Icon = styled.div`
  position: fixed;
  right: 10%;
  top: 2%;

  svg{
    font-size: 2rem;
    color: var(--bg-black);


    :hover{
      transform: scale(1.1);
    }
  }
`

const ButtonDN = styled.button`
  background: none;
  border: 1px solid var(--bg-black);
  border-radius: 50%;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 15px var(--bg-black);
`

export default StyleSwitcher