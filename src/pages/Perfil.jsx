import styled from "styled-components"

export function Perfil () {
  return (
    <Container>
            <div className="titulo">
            <h1>Profile</h1>
          </div>
            
            <FormContainer>
                <form>
                    <div className="form-group">
                        <label>Name :</label>
                        <input type="text" value="Juan Pérez" disabled />
                    </div>
                    
                    <div className="form-group">
                        <label>Email :</label>
                        <input type="email" value="juan.perez@email.com" disabled />
                    </div>


                    <div className="form-group">
                        <label>Phone :</label>
                        <input type="tel" value="+54 9 11 12345678" disabled />
                    </div>


                    <div className="form-group">
                        <label>Address :</label>
                        <input type="text" value="Calle Principal 123" disabled />
                    </div>


                    <div className="form-group">
                        <label>City :</label>
                        <input type="text" value="Avellaneda" disabled />
                    </div>


                    <div className="form-group">
                        <label>Postal Code :</label>
                        <input type="text" value="1870" disabled />
                    </div>


                    <div className="form-group">
                        <label>Country :</label>
                        <input type="text" value="Argentina" disabled />
                    </div>


                  
                </form>
            </FormContainer>
        </Container>
    )

}

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.lightbackground};
  padding-top: 20px;

  .titulo {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 800px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-weight: 500;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    width: 100%;
  }
`;
