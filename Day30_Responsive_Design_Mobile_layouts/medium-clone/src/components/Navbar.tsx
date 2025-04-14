import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFontSize } from '../hooks/useFontSize';

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    background-color: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.text};
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }
`;

const ControlButtons = styled.div`
    display: flex;
    gap: 1rem;
    button {
        font-size: 1rem;
        padding: 0.5rem;
        cursor: pointer;
        background-color: ${({ theme }) => theme.cardBackground};
        color: ${({ theme }) => theme.text};
        border: 1px solid ${({ theme }) => theme.text};
        border-radius: 4px;
        &:hover {
            background-color: ${({ theme }) => theme.text};
            color: ${({ theme }) => theme.cardBackground};
        }
    }
`;

export const Navbar: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
    const { increaseFontSize, decreaseFontSize } = useFontSize();

    return (
        <NavbarWrapper>
            <NavLinks>
                <Link to="/">Home</Link>
            </NavLinks>
            <ControlButtons>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <button onClick={increaseFontSize}>A+</button>
                <button onClick={decreaseFontSize}>A-</button>
            </ControlButtons>
        </NavbarWrapper>
    );
};
