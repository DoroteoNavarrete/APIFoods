import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import StyleSwitcher from "./components/StyleSwitcher";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StyleSwitcher />
        <Nav>
          <Llogo />
          <Logo to={"/"}>RestaurantApi</Logo>
        </Nav>
        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Llogo = styled(GiKnifeFork)`
  color: var(--text-black);
  font-size: 3rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  font-style: italic;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  :hover {
    transform: scale(1.05);
  }
`;

export default App;
