# React Frontend Registaration Form with Validation

React | Vite | Typescript | Formik | Storybook

### Getting started

First install the project packages

```
npm install
```

To run the development server

```
npm run dev
```

If not using VS Code or and your IDE does not have a LSP,
prettier (format) and eslinting (lint) is available

```
format": "prettier --write  \"src/**/*.{js,jsx,ts,tsx}\"",
npm run lint
```

Storybook for local

```
npm run stroybook
```

If a build for Storybook is required

```
npm run build-storybook
```

To create Production Builds and preview on local

```
npm run build
npm run preview
```

### The following User story was created

- User can input a username, password, and password confirmation
- User can click on a confirmation button that will display a confirmation message on successful submission
- The user should be able to understand whether the input is valid through visual cues of some sort

### Requirements:

- Validation for both the username and password fields.
- Password and password confirmation fields must be equal in order for the user to be able to submit the form contents.
- Uses Typescript and React
- Tooling is flexible for form management, validation, building, styling, etc...
