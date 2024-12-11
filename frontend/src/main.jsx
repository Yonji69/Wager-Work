import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('/') 
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => setMessage('Error connecting to the backend'));
    }, []);

    return <div>{message}</div>;
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
