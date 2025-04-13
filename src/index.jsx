import React from 'react'
import { createRoot } from 'react-dom/client'
import Causative from './Causative'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    < Causative/>
  </React.StrictMode>
);

