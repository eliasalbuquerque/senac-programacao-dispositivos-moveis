# Creating an app with React

## Sumary

1. Install Node.js and NPM.
2. In terminal, go to app directory.
3. Rum `npm create-react-app my-app`.
4. Finally run `cd my-app` and then `npm start`.

## Steps to Create an App in React

1. Install Node.js and NPM: Node.js is a runtime environment for JavaScript, and NPM is a package manager that comes with it. You can download and install them from the official website.

2. Create a new React app: Open your terminal and navigate to the directory where you want to create your app. Run the following command to create a new React app with Create React App:

```
npx create-react-app my-app
```

Replace `my-app` with the name of your app.

3. Run the app: Once the app is created, navigate to the directory by running `cd my-app`. Then, run the following command to start the development server:

```
npm start
```

This should open a new tab in your browser with your app running.

4. Modify the app: Open the code in your preferred code editor and start modifying it. The main file that you'll be working on is `src/App.js`, which contains the main component of your app. You can also create new components and import them into `App.js`.

5. Add dependencies: If you need to use external libraries or packages in your app, you can install them using NPM. For example, if you want to use a library like Bootstrap, you can run the following command:

```
npm install bootstrap
```

Then, you can import the library into your code like this:

```
import 'bootstrap/dist/css/bootstrap.css';
```

6. Build the app: When you're ready to build your app for production, you can run the following command:

```
npm run build
```

This will create a `build` folder with optimized and minified versions of your code.