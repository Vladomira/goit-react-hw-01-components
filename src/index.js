import React from 'react';
import ReactDom from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import App from './components/App';
import './index.css';
// import './components/container/container.css';

ReactDom.render(<App />, document.querySelector('#root'));

// ReactDom.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('#root'),
// );

// ====================
// const el1 = <span>Hello</span>;
// const el2 = <span>World</span>;
// const jxEl = (
//   <div>
//     {el1}
//     {el2}
//   </div>
// );
// console.log(jxEl);

// const el1 = React.createElement('span', { children: 'Hello' });
// const el2 = React.createElement('span', { children: 'World' });

// const el = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [el1, ' ', el2],
// });
// console.log(el);

// ReactDom.render(el, document.querySelector('#root'));

// ===============
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
