import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'} >
        <GiChopsticks />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Spanish'}>
        <GiNoodles />
        <h4>Spanish</h4>
      </SLink>
    </List>
  )
}

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  :hover{
    transform: scale(1.1);
  }
`

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 0rem;
  margin-left: 1.5rem;
  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: var(--bg-black-gradient);
    width: 5.5rem;
    height: 5.5rem;
    cursor: pointer;

    h4{
      color: var(--text-white-900);
      font-size: 1rem;
    }

    svg {
      color: var(--text-white-900);
      font-size: 1.5rem
    }
    &.active{
      background: var(--bg-button-active);

      svg{
        color: var(--text-white-900);
      }
      h4{
        color: var(--text-white-900);
      }
    }
  }
`


export default Category
