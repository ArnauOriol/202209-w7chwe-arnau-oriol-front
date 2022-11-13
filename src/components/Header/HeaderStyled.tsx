import styled from "styled-components";

const HeaderStyled = styled.header`
  color: #fff;
  display: flex;
  background-color: #1877f2;
  padding: 30px;
  justify-content: space-between;
  align-items: baseline;
  .header {
    &__title {
      font-size: 40px;
      font-weight: 600;
    }
    &__wrapper {
      display: flex;
      gap: 10px;
    }
    &__category {
      font-size: 24px;
    }
  }
`;

export default HeaderStyled;
