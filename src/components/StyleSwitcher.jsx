import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import styled from 'styled-components'
import { useState } from 'react'



function StyleSwitcher() {

  const [activeStyle, setActiveStyle] = useState('moon');

  return (
    <Icon>
      <ButtonDN className={setActiveStyle} onClick={() => {
        if(activeStyle === 'moon') {
          document.body.classList.toggle("dark");
          setActiveStyle('sun');
        } else if (activeStyle === 'sun'){
          document.body.classList.remove('dark');
          setActiveStyle('moon');
        }
      }}>
      {activeStyle === 'moon' && (
          <div>
            <FaMoon />
          </div>
        )}
      {activeStyle === 'sun' && (
          <div>
            <FaSun />
          </div>
        )}       
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
  border: none;
`

export default StyleSwitcher