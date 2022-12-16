# Innowise Lab Internship: Level 1: Clever to-do list

### [Task](https://drive.google.com/file/d/18I1PxOxZn2lwm__YeOtMNoWeiXygKwwN/view)

### How to run the app
1. Development mode
  - `npm ci`
  - `npm start`

2. Production mode
  - `npm ci`
  - `npm run build`
  - `npx serve -s build`

### Database snapshot
![firestore db snapshot](https://res.cloudinary.com/blvck40deg/image/upload/v1671196353/DEV/firestore_snapshot1.png)

### Tech stack
- TypeScript
- React
- Firebase
- React Firebase Hooks
- Chakra UI

### Folder structure
- **/.husky** : git hooks
- **/public** : static HTML
- **/src** : entry point for the main logic
  - **/chakra** : Chakra UI config files
  - **/components** : reusable React components
    - **/auth** : authentication-related components
    - **/calendar** : calendar-related components
    - **/generic** : components that do not fit into any specific category, e.g. universal
    - **/tasks** : tasks-related components
    - **/ui** : style-only components
  - **/hooks** : custom utility hooks
  - **/pages** : main components that are rendered on specific routes
  - **/server** : abstractions to communicate with Firebase
    - **/tasks** : tasks-related entities
    - **/auth** : auth-related entities
  - **/types** : interfaces, type declarations, map objects, etc.
  - **/utils** : narrowly-focused utility entities