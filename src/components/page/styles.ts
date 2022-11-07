import styled from 'styled-components'

export const Container = styled.div`
  main {
    max-width: 576px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      max-width: 1145px;
      display: grid;
      justify-content: space-between;
      grid-template-columns: 22% 70%;
    }
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    max-width: 576px;
    padding: 0.5rem 1rem;
    h1 {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      font-size: 3rem;
      font-weight: 600;
    }

    @media screen and (min-width: 768px) {
      max-width: 1145px;
    }
  }
`

export const MenuButton = styled.button`
  font-size: 0;
  background: transparent;
  border-radius: 100%;
  padding: 0.3rem;
`
