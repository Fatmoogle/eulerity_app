PetsLuv Gallery

 ## Table of Contents
  - [Description](#Description)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Questions](#Questions)

  ## Description
  This web application was created with ReactJs, React-Redux, React-Router-Dom, Material-UI, and Styled-Components.

  ## Process
  The first thing I usually do before anything with my projects, is pseudo-code and plan out what it is I want to do in very vague steps. For this projet my approach was no different. I knew that even though Redux was optional, I wanted to implement it into the project. In fact, this is my very first time making an application with Redux an Styled Components. Following tutorial after tutorial and reading an exaggerated amount of documentation, I was able to get a grasp on the large concepts of both, especially Redux. After I had some time to review the stack and familiarize myself with it, I started to build the app.
  File structure was first, and then implementing the Redux store. Once the store could manage the state correctly after making my API call, I started to make the skeleton structure of the app that was ugly, but functional. The idea is once you get the main 'nervous system' working, then I can pretty it up with styling. Again, this was no different than how I traditionally make applications. 


  ### Functionality
  I began first with the file structure and funcionatlity. Since there was no back end I had to manage and I only had to make an API call, I could totally focus on my React structure and setting up the components. I started with create-react-app, and installed my dependencies ranging rom react-redux, Material-UI, Styled Components, React-Router-Dom, and FileSaverJs. This is my first application using Redux, Styled Components, and FileSaverJs. After the initial setup, I then created my Redux store, actions, and reducers. The most difficult thing about implmenting Redux was understanding the jargon and knowing what each part of the app does. But once I had a general idea of the flow it was much easier to implement everything despite the large amount of boiler plate.

  Once Redux was setup, I could then get my code to manage the store and pass state through the components. After squashing bug after bug, I could finally work on styling with my newly learned Styled Components, and one of my favorite front end libraries for React, Material-UI. The application serves as a gallery style app, pulling pet pictures from an API, which lets users select the pictures individually, select all, deslect all, and download the pngs that were selected. This was done using FileSaverJs which I installed via npm. The user clicking on a picture grabs the idea of the clicked image and puts it into state. Once the object ids get pulled into state, the user can download the files. The download function loops through the selected ids, and returns the whole object if the ids match into a temporary array. The objects include an image url, a title, description, and when it was created. The download function then maps through the array and uses FileSaverJs to create the file name and url. 

  #### Challenges
  Using Redux was definitely a challenge. The amount of boiler plate code needed for something that most react applications handle quite easily, was headache inducing. But after the learning curve and learning what each part of Redux does, it wasn't nearly as bad as many people might say. Once Redux was done, one of the more conceptually difficult things about this app was determining what would go into state directly or into the store. For some things like the selected images and the ids, I used local state. Some of the functions were also difficult to manage, such as the download function. One oversight I ran into was that when I clicked on images, I was ONLY storing the ID. So I created a function that would loop through the array of IDs and would check to see if the ID would match an ID in the whole array of pet objects, and it would return the matching object and store it into an array. It may seem simple, but as always, the initial though process behind creating these functions can sometimes be a bit daunting and a bit frustrating. Sometimes, itss best to just step away and grab a drink.

  ## License
  [MIT](https://opensource.org/licenses/MIT)

  ## Contributing
  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
  [Material UI](https://material-ui.com/)
  [Styled Components](https://styled-components.com/)
  [React-Redux](https://react-redux.js.org/)
  [React-Router](https://reactrouter.com/)

  ## Questions
  [GitHub: Fatmoogle](https://github.com/Fatmoogle)
  [Email: alexvar93@gmail.com](alexvar93@gmail.com)
  Feel free to reach out to me with any questions! Happy Hacking!