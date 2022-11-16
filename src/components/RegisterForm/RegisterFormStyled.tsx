import styled from "styled-components";

const RegisterFormStyled = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  @media (min-width: 600px) {
    margin-top: 100px;
    flex-direction: row;
  }
  .register-form {
    &__logo {
      color: #1877f2;
      font-size: 40px;
      font-weight: 600;
      margin-top: 20px;
      align-self: center;
      @media (min-width: 600px) {
        margin-right: 30px;
        margin-top: 0;
      }
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media (min-width: 600px) {
        width: 300px;
      }
    }
    &__field {
      width: 100%;
      border: 2px solid #808080;
      border-radius: 5px;
      height: 40px;
      padding: 15px;
    }
    &__redirect {
      font-weight: 700;
      color: #1877f2;
      text-decoration: none;
    }
  }
`;

export default RegisterFormStyled;
