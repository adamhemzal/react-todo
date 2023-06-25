import styled from "styled-components";

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 1rem 0;
  list-style-type: none;
  li:first-child a {
    padding-left: 0;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  a {
    display: block;
    padding: 0.25rem 0.75rem;
  }
`;

const Header = (): JSX.Element => {
  return(
    <header>
      <nav>
        <List>
          <Item><a href="/">Home</a></Item>
          <Item><a href="/todos">Todos</a></Item>
          <Item><a href="/create">Create Todo</a></Item>
        </List>
      </nav>
    </header>
  )
}

export default Header;