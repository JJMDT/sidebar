import styled from "styled-components"


export function Favoritos () {

    return (
        <Container>
            <div className="titulo">

            <h1>Favorites</h1>
            </div>
            
        </Container>
    )

}

const Container = styled.div`
  height: 100vh;
background: ${({ theme }) => theme.lightbackground};
  padding-top: 20px;

.titulo {
  display: flex;
  justify-content: center;
}

`;