import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 140px;
    justify-content: space-between;
    align-items: center;
    display: flex;

    .logo{
        h1{
            font-size: 45px;
            letter-spacing: 6.5px
        }
    }
    .options{
        align-items: center;
        display: flex;
        span{
            padding: 0 20px;
            font-weight: 600;
            &:hover{
                cursor: pointer;
            }
        }
    }
`;