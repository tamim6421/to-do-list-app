# Project Title

To-Do-List App

# Live Link 
https://to-do-list-fc64a.web.app/


## Tech Stack

**Client:** React, TailwindCSS, Javascript , DND , AOS, Framer motion, React hook form, React Router Dom, sweetalert2, react-hot-tost, react-helmet, firebase, react-dnd-html5-backend,react-spinners etc


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Responsive in all device 


## Environment Variables

To run this project, you will need to add the following api keys in firebase.config.js file 

`API_KEY`

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDs6PrERu_QN66MBQlIn-V6ATS1hs9tHaw",
  authDomain: "to-do-list-fc64a.firebaseapp.com",
  projectId: "to-do-list-fc64a",
  storageBucket: "to-do-list-fc64a.appspot.com",
  messagingSenderId: "232754710145",
  appId: "1:232754710145:web:070e37ad2ef72d524f2f80"
};

export const app = initializeApp(firebaseConfig);

## Documentation



## User Authentication
- Users need to create an account and log in to access the app.

- Implement Google login for a seamless authentication experience.

## Task Management
- Users can add new tasks to the app.

- Tasks have three stages: 'Todo,' 'Ongoing,' and 'Completed.'

- Tasks can be moved between stages through a drag-and-drop mechanism.

- Tasks can be deleted when no longer needed..

## User Dashboard:
- Upon logging in, users are directed to their personalized dashboard.

- Dashboard is a privet route , Only logn user can visite dashboard 


## Authors

- By incorporating these features, your To-Do app aims to provide a user-friendly experience, allowing users to efficiently manage their tasks through a visually intuitive interface. The integration of user accounts and Google login enhances user engagement and ensures a personalized and secure experience for each user.

