# Project Description
Create a Screen which list the users as iPhoneX contacts.
The user can see the information of each contact in a modal. 
A delete button is showed if the user swiped to the left.


# How to use and test all features?
1. When the application starts, it will display data from API end-point
2. Data are represented in cards and each card represents a contact
3. Double click on any card using a mouse or touchpad to display the card contents in a modal
4. When a modal is opened, you can (press ok button) or click (outside the modal) to hide the modal
5. One click and drag to the left using a mouse or touchpad to swipe the card and show the delete button
6. One click and drag to the right using a mouse or touchpad to remove swipe and hide the delete button
7. press the delete button to show the confirmation modal (yes/no)
8. when pressing (yes), the card will be deleted
9. when pressing (no) or (x) or outside the modal, the delete modal will be removed and the card still exists.
 

# Installation and Start (if you have the git link)
$ git clone https://github.com/helmy660/Contact-List-react.git 
$ cd Contact-List
$ npm install
$ npm start

# Installation (if you have hard copy)
$ npm install
$ npm start

# Simple build for production
$ npm run build

# tools & libraries
React for UI.
Redux for storing data
Styled Components
ReactStrap library
FontAwesome library

# Folder Structure
my-app/
  node_modules/
  public/
    index.html
    manifest.json
  src/
    actions/
      action_types.js
      index.js
    components/
      ContactItem/
      ContactList/
      DeleteModal/
      DetailsModal/
      MockUp/
    globalStyle/
    reducers/    
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    working release
  package.json
  package-lock.json
  README.md
  
  
