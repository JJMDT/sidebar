import styled from "styled-components";

export function Settings () {
    return (
        <Container>
            <div className="titulo">
                <h1>Settings</h1>
            </div>
        </Container>
    )
}
const Container = styled.div`
  height: 100%;
background: ${({ theme }) => theme.lightbackground};
  padding-top: 20px;

.titulo {
  display: flex;
  justify-content: center;
  height: 100%;
}
`;
