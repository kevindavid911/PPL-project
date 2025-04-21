import React from 'react'
import { createRoot } from 'react-dom/client'
import Verbs from './Verbs'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    < Verbs/>
  </React.StrictMode>
);

