import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./app";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);
console.log(`
888    888          888 888          888 
888    888          888 888          888 
888    888          888 888          888 
8888888888  .d88b.  888 888  .d88b.  888 
888    888 d8P  Y8b 888 888 d88""88b 888 
888    888 88888888 888 888 888  888 Y8P 
888    888 Y8b.     888 888 Y88..88P  "  
888    888  "Y8888  888 888  "Y88P"  888

Hi there fellow code inspector! 

You should checkout the source code on github: https://github.com/daltonlicause/portfolio
`)