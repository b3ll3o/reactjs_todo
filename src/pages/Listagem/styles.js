import styled from 'styled-components';

export default styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
  height: fit-content;
  margin-top: 1.5rem;
  margin-bottom: .5rem;

  span{
    display: flex;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  .last-line{
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
  }

  a{
    display: flex;
    flex-direction: row-reverse;
  }
`;