import styled from "styled-components";
import { css } from "styled-components";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

// export const Block = styled.div`
//   height: 70px;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: space-between;
//   position: relative;
//   top: 0;
//   left: 0;
//   padding: 0 10px;
// `;

export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const User = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  ${hover02}
`;
