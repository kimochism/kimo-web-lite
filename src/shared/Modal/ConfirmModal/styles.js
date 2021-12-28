import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .message{
    padding: 20px;
  }
  .actions{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0 5px 0;

    button {
      width: 48%;
      background-color: white;
      padding: 15px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      text-transform: uppercase;
    }
    
    .confirm{
      background-color: black;
      color: white;
    }
  }
`;