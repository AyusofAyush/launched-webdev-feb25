import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#fff',
    text: '#000',
    navBackground: '#f5f5f5',
    cardBackground: '#fff',
    articleBackground: '#f9f9f9'
};

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    navBackground: '#1c1c1c',
    cardBackground: '#1e1e1e',
    articleBackground: '#2c2c2c'
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Georgia', serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    font-size: 1rem; /* Use rem so font scaling works with the root font size */
  }

  button {
    cursor: pointer;
    border: none;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  h1, h2, h3 {
    font-weight: bold;
  }
  
  p {
    line-height: 1.6;
  }
`;
