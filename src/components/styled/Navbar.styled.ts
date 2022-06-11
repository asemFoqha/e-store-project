import styled from "styled-components";

export const NavbarStyled = styled.div`
  width: 100%;
  height: 50px;
  background-color: #0288D1;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    height: 100%;
    display: flex;
    align-items: center
  }

  div ul {
    display: flex;
    list-style: none;
    height: 100%;
  }

  div ul a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 10px;
    position: relative;
  }

  div ul a:nth-child(1) {

  }

  div ul a.cart {
    width: 100px;
    display: flex;
    justify-content: space-evenly;
  }

  div ul a::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #03A9F4;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.5s ease-out;
  }

  div ul a:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }

  div ul a.active::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`;
