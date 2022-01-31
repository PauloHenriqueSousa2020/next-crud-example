import * as S from "./styles";

interface HeaderParams {
  title: string;
}
export const Header = ({ title }: HeaderParams) => {
  return (
    <S.Header>{title}</S.Header>
  )
}