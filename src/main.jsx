import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import {App} from './app'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css'


createRoot(document.getElementById('root')).render(
    <MantineProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MantineProvider>

)
