import styled from 'styled-components';

export const Container = styled.section`
  margin: 0px auto;
  max-width: 960px;
  width: 960px;
`;

export const SubTitle = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Title = styled.h1`
   font-size: 24px;
   margin: 10px 15px;
   color: #1d1e1e;
`;

export const ButtonSection = styled.section`
  margin: 5px;
`;

export const ButtonSuccess = styled.button`
  background-color: #fff;
  color: #198754;
  padding: 5px 8px;
  border: 1px solid #198754;
  border-radius: 4px;
  font-size: 16px;

:hover {
  color: #fff;
  background-color: #198754;
}
`;

export const ButtonAction = styled.button`
  background-color: #fff;
  color: ${props => props.action === 'read' ? '#0d6efd' : props.action === 'edit' ? '#ffc107': props.action === 'delete' ? '#dc3545' : '#0dcaf0'};
  padding: 5px 8px;
  border: 1px solid  ${props => props.action === 'read' ? '#0d6efd' : props.action === 'edit' ? '#ffc107': props.action === 'delete' ? '#dc3545' : '#0dcaf0'};;
  border-radius: 4px;
  font-size: 15px;

:hover {
  color: #fff;
  background-color:  ${props => props.action === 'read' ? '#0d6efd' : props.action === 'edit' ? '#ffc107': props.action === 'delete' ? '#dc3545' : '#0dcaf0'};;
}
`;


export const Table = styled.table`
  margin-top: 5px;
  width: 100%;

  th {
    background-color: #007281;
    color:  #f1f1f1;
    padding: 10px;
  }

  td {
    background-color: #f6f6f6;
    color: #3e3e3e;
    padding: 8px;
  }
  `;
  export const SpanView = styled.p`
  font-size: 18px;
  margin-top: 8px;
  `;

export const Form = styled.form`
margin: 0px auto;

`;

export const Label = styled.label`
width: 0px auto;
padding: 12px;
margin-top: 6px;
margin-bottom: 16px;
`;

export const Input = styled.input`
width: 100%;
border: 1px solid #ccc;
padding: 12px;
border-radius: 4px;
box-sizing: border-box;
margin-top: 6px;
margin-bottom: 16px;
resize: vertical;
`;

export const Hr  = styled.hr`
margin-bottom: 15px;
`;

export const AlertAction = styled.p`
  background-color: ${props => props.type === 'error' ?  '#f8d7da' : '#d1e7dd'};
  color: ${props => props.type === 'error' ?  '#842029' : '#0f5132'};
  margin: 10px 0;
  padding: 7px;
  border: 1px solid ${props => props.type === 'error' ?  '#f5c2c7' : '#badbcc'};
  border-radius: 7px;
`;