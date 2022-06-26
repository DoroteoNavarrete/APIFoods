import React from 'react'
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom' 


function Gluten() {
    const [gluten, setGluten] = useState([]);

    useEffect(() => {
      getGluten();
    }, []);
  
  
    const getGluten = async () => {
      const check = localStorage.getItem("gluten");
  
      if(check){
        setGluten(JSON.parse(check));
      } else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=glutenFree`)
        const data = await api.json();
      
        localStorage.setItem("gluten", JSON.stringify(data.recipes));
        setGluten(data.recipes);
        console.log(data.recipes);
      }
    }
  
    return (
      <Wrapper>
        <h3>Gluten Free</h3>
  
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem"
        }}>
          {gluten.map(recipe => {
            return(
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    )
  }
  
  const Wrapper = styled.div`
    margin: 4rem 2rem;
  
    h3{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
  
  
  const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
  
    :hover{
      border: solid 3px var(--text-black);
    }
  
    img{
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; 
    }
  
    p{
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, 0%);
      color: var(--text-white-900);
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  
  const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  `;

export default Gluten