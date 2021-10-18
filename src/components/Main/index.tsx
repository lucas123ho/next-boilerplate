import * as S from "./styles";

const Main = ({
  title = "React Avançado",
  description = "Typescript, NextJS e Styled Components",
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" />
  </S.Wrapper>
);

export default Main;
