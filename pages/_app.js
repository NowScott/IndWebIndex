// pages/_app.js
import '../styles/globals.css';
import { FontProvider } from '../contexts/FontContext';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <FontProvider>
                <Component {...pageProps} />
            </FontProvider>
        </ThemeProvider>
    );
}

export default MyApp;