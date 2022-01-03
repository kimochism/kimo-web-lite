import styled from 'styled-components';
import { colors, fontSize } from 'variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;

  .addresses{
    display: flex;
    flex-direction: column;

    span{
      border: 2px solid ${colors.black};
      padding: 15px;
      margin-top: 10px;
      cursor: pointer;
    }
  }

  .add-address{
    cursor: pointer;
  }

  button{
    padding: 15px;
    background: ${colors.black};
    color: ${colors.white};
    font-size: ${fontSize.default};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }
`;