import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: inline-block;
  width: 40vw;
  height: 75vh;
  padding: 2rem;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  background: white;
  position: relative;
  font-size: 1.3rem;

  &: hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
  }
`

const Header = styled.div`
  font-family: 'Quicksand', sans-serif;
  background: #190e4f;
  color: #fffff1;
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: 900;
  border-radius: 1rem;
`

const Body = styled.div`
  text-align: center;
  height: 80%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1rem;
  position: relative;
`

export function InvoiceLayout({ children }) {
  return (
    <Layout>
      <Header>Invoice App</Header>
      <Body>{children}</Body>
    </Layout>
  )
}
