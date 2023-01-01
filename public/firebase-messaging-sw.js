importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCoiaFNqpEqLd4W2q0OM-0StSVfnPWijwc",
  authDomain: "assigndesk-d0b7d.firebaseapp.com",
  projectId: "assigndesk-d0b7d",
  storageBucket: "assigndesk-d0b7d.appspot.com",
  messagingSenderId: "828122301996",
  appId: "1:828122301996:web:4532bb7ac51d8e2bbd3389",
  measurementId: "G-159PS3X1SY",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
