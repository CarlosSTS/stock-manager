import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 70vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  span {
  color: #f00;
  font-size: 16px;
  align-self: flex-start;
  font-weight: 500;
}

a {
  display: flex;
  align-items: center;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500; 
  transition:opacity 0.2s;
}
svg {
  margin-right: 8px;
}
`;