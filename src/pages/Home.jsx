import styled from "styled-components";

export function Home() {
  return (
    <Container>
        <div className="titulo">
          <h1>Home</h1>
        </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
background: ${({ theme }) => theme.lightbackground};
.titulo {
  display: flex;
  justify-content: center;
  height: 100%;
}
`;