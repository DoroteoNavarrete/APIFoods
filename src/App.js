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
          <Logo to={"/"}>
            <p>
              Res <Llogo /> aurant
            </p>
          </Logo>
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
  font-size: 3.5rem;
  transform: rotate(295deg) translate(1rem, -10%);
  margin-left: 15px;
`;

const Logo = styled(Link)`
  text-decoration: none;
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

  p {
    font-size: 3rem;
    display: flex;
  }

  :hover {
    transform: scale(1.05);

    svg {
      color: #a84304;
    }
  }
`;

export default App;
