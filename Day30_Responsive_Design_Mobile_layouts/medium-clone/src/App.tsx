import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ArticleDetailsPage } from './pages/ArticleDetailsPage';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';

const App: React.FC = () => {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Router>
                <Navbar toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/article/:id" element={<ArticleDetailsPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
