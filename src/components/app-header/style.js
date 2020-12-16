import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  .m-top {
    background: #242424;
    height: 70px;
    color: #fff;
    .m-top-center {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const AppHeaderNavLeft = styled.div`
  display: flex;
  align-items: center;
  .logo {
    width: 176px;
    height: 70px;
  }
  .nav-item {
    position: relative;
    line-height: 70px;
    padding: 0 19px;
    color: #ccc;
    text-decoration: none;
  }
  a.nav-item:hover,
  .active {
    color: #fff;
    background: #000;
    text-decoration: none;
  }
`;

export const AppHeaderNavRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
`;
