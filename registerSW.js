if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/felixfiles/sw.js', { scope: '/felixfiles/' })})}