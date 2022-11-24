import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #000;
  border-radius: 1.6rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  min-width: 220px;
`

export const Avatar = styled.img`
  margin: 1rem 0;
  width: 8rem;
  height: 8rem;
  background-image: url('src/assets/images/profile.jpeg');
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
`

export const Headline = styled.span`
  font-size: 1.2rem;
  text-align: center;
`
