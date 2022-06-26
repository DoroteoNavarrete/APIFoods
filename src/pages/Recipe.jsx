import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() => {
    fetchDetails();

  }, [params.name]);


  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt='' />
      </div>
      <Info>
        <Button className={activeTab === 'instrucions' ? 'active' : ''} onClick={() => setActiveTab('instrucions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instrucions' && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}
       {activeTab === 'ingredients' && (
        <ul>
          {details.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
       )}
      </Info>
    </DetailWrapper>
  );
}


const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  color: var(--bg-black);
  justify-content: center;

  .active{
    background: var(--bg-black-gradient);
    color: var(--text-white-900);
    font-size: 1.05rem;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: var(--text-black);
  background: var(--bg-white-800);
  border: 2px solid var(--bg-black);
  border-radius: 1rem;
  margin-right: 2rem;
  font-weight: 600;

  :hover {
    font-size: 1.02rem;
  }
`

const Info = styled.div`
  margin-left: 10rem;

  h4{
    margin-top: 2rem;
  }
`
 
export default Recipe

