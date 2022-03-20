# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Typescript for templating

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## SETUP DEV ENVIRONMENT

1. cd e-commerce-app

2. npm i

3. npm run server:dev: Will run the server on localhost:8080

4. npm run start : Check your browser on localhost:3000

NOTE : the application does not consists of any database. The server is only using data from a mock json.

## Additional Information about the app

1. The landing page consists of the list of products. The user can search a product based on the name or the description that is available. if found, the server should return a response of the product.

2. The functionality to add/remove items from the cart is added. The user can view cart by clicking on the button in the header. It should show the list of items present in the cart

3. On clicking a product, the application redirects to the details page of a product. An item can be added to cart from the details page as well.

4. To place an order, the cart needs to be viewed and the user needs to be enter an email, and the order is placed.

## Scope of Improvement

1. The application can use the Intersection Observer Web API to lazy load images on demand. This would increase the app performance and the first paint.

2. A loading screen can be implemented.

3. Setting up a database to persist data and store all orders and products

4. Add new products functionality
