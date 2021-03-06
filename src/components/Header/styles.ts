import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  location: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        padding-bottom: 10px;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }

      ${props =>
        props.location === '/'
          ? css`
              a:nth-child(1) {
                border-bottom: 2px solid #ff872c;
              }
            `
          : css`
              a:nth-child(2) {
                border-bottom: 2px solid #ff872c;
              }
            `}
    }
  }
`;
