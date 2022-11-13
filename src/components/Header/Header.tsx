import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header__container">
      <h1 className="header__title">fakebook</h1>
      <ul className="header__wrapper">
        <li className="header__category">Home</li>
        <li className="header__category">Profile</li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
