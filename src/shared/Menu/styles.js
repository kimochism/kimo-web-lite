import styled from 'styled-components';
import { colors } from 'variables';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${colors.white};
    z-index: 9999;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 20px;
            letter-spacing: 6.5px;
            color: black;
        }
        
        a {
            text-decoration: none;
        }

        img {
            width: 24px;
            height: 24px;
            padding-right: 8px;
            position: absolute;
            right: 10px;
        }
    }

    .content {
        width: 100%;
        margin: 0;
        padding: 0;
        
        li {
            display: flex;
            align-items: center;
            padding: 30px;
            font-weight: 600;
            list-style-type: none;
            border-bottom: 1px solid rgb(224, 224, 224);
            transition: 0.4s all ease-in-out;

            img {
                width: 24px;
                height: 24px;
                margin-right: 24px;
            }

            &:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }
        }
    }

    .footer {
        display: flex;
        justify-content: center;
        background-color: ${colors.black};
        color: ${colors.white};
        padding: 20px;
    }

    @media screen and (min-width: 1240px) {
        position: initial;
        height: 80px;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        padding: 20px 0px;

        .header {
            h1 {
                font-size: 45px;
                word-break: keep-all;
                padding-left: 140px;

                &::after {
                    content: "気持ち";
                    padding-left: 20px;
                }
            }
            img {
                display: none;
            }
        } 

        .content {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding-right: 140px;

            li {
                border: none;
                &:hover {
                    background: none;
                    cursor: pointer;
                }

                img { 
                    display: none;
                }
            }
        }

        .footer {
            display: none;
        }
    }
`;

export const SubHeader = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 20px;
      letter-spacing: 6.5px;
      color: black;
    }

    a {
      text-decoration: none;
    }

    .actions {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 20px;
      background: black;

      img {
        width: 24px;
        height: 24px;
        
      }

      .left-side {
        img {
          filter: invert();
          padding: 0px 7.5vw;
        }
      }

      .right-side {
        padding: 0px 7.5vw;
        
        img {
          width: 20px;
        }

        .invert {
          filter: invert();
          padding-left: 5vw;
        }
      }
    }
`;