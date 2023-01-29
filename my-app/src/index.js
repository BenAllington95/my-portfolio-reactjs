import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const faders = document.querySelectorAll('.fade-in')
// const appearOptions = {
//   threshold: 1,
//   rootMargin: "0px 0px -200px 0px"
// }

// const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear")
//       appearOnScroll.unobserve(entry.target)
//     }
//   })
// }, appearOptions)

// faders.forEach(fader => {
//   appearOnScroll.observe(fader)
// })

window.addEventListener('scroll', function() {
  const reveals = document.querySelectorAll('fade-in')

  for (let i=0; i< reveals.length; i++) {
    const windowHeight = window.innerHeight
    const revealTop = reveals[i].getBoundingClientRect().top
    const revealPoint = 150;
    if(revealTop < windowHeight- revealPoint) {
      reveals[i].classList.add('appear')
    } else {
      reveals[i].classList.remove('appear')
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
