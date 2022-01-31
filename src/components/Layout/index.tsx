import { Container } from "./styles";

interface LayoutProps {
  children: any;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <section className="layout__children">{children}</section>
    </Container>
  );
};
