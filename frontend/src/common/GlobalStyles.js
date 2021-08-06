import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
margin: 0; 
padding: 0;
outline: 0;
box-sizing: border-box;
 }
 html, body, #root {
   min-height : 100%;
 }
 body {
   background-color: #fefefe;
   -webkit-font-smoothing: antialiased !important;
   font: 400 14px Roboto, sans-serif;
 }

 input, button {
  font: 400  18px Roboto, sans-serif;
}

 button {
   cursor: pointer;
 }
 
a {
  text-decoration: none;
  
}
.activePath {
  color: #50fa7b;
}
.inactivePath {
  color: #fff;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcd3e6;
  border-radius: 8px;
  padding: 0 24px;
  margin-bottom: 8px;
}

.button {
  width: 100%;
  height: 60%;
  border: 0;
  border-radius: 8px;
  color: #fff;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 60px;
  transition:filter 0.2s;
  justify-content: center;
  display: flex;
  align-items: center;
}

.button:hover {
  filter: brightness(90%);
}
`;