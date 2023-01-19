
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { TnvedApp } from './tnvedapp';
// import { tnved_manager } from '../tnved_manager';

// const TnvedAppConfig = {
//     isclasses: true,
//     manager: new tnved_manager({})
// }

// const target = document.querySelector('#ccs-app');

// createRoot(target).render(<TnvedApp search={true} {...TnvedAppConfig} />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { TnvedApp } from './tnved/app/tnvedapp';

const TnvedAppConfig = {
    isclasses: true,
    manager: new tnved_manager({})
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TnvedApp  search={true} {...TnvedAppConfig}/>
);


