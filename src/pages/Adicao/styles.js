import styled from 'styled-components';

export default styled.div`

  display: flex;
  width: 90%;
  height: 100%;
  margin-left: 5%;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
    margin-top: 1.5rem;

    input{
      margin-bottom: 1rem;
      height: 1.5rem;
      text-indent: .5rem;
    }

    textarea{
      height: 55%;
    }

    button{
      height: 2rem;
      margin-top: 1rem;
    }
  }
`;