
# **GETTING STARTED**

*This project was developed with [NodeJS](https://nodejs.org/en/) and [React](https://fr.reactjs.org/).*

## **INSTALL PROJECT**

Run the following command to download the project (`client` and `server`).

```bash
git clone https://github.com/AugustinLegrand/projet_12_13_02_2022.git
```

After downloading the project with the ``client`` and the ``server``, you need to run the following command to download the dependencies necessary for the proper functioning of the two applications.

```bash
npm run initproject
# or
yarn initproject
```

Once the dependencies are downloaded, you can launch both applications without any problem. 

## **START APPLICATIONS**

> Did you follow the first step correctly? (**INSTALL PROJECT**).

Well, you can run the following two commands to launch the client and server application.

```bash
npm run server
# or
yarn server
```
> Launch the application server to url: [Application server](http://localhost:3333)

```bash
npm run client
# or
yarn client
```
> Launch the application client to url: [Application client](http://localhost:3000)


# **LEARN MORE**

*Want to learn more about both apps? about the dependencies we use ? In short, know what you are downloading !*

## **client**

> Client application created with [React](https://fr.reactjs.org/)

##### **Scripts**

* `start` | *Execute and lunch application client to [http://localhost:3000](http://localhost:3000)*

##### **Dependencies**

* [Axios](https://axios-http.com/) | *is a simple promise based HTTP client for the browser and [NodeJS](https://fr.reactjs.org/). Axios provides a simple to use library in a small package with a very extensible interface.*
* [React-router-dom](https://v5.reactrouter.com/) | *To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try [Create React App](https://fr.reactjs.org/docs/create-a-new-react-app.html). It’s a popular tool that works really well with React Router.*
* [Recharts](https://recharts.org/) | *A composable charting library built on React components*

## **server**

> Server application created with [NodeJS](https://fr.reactjs.org/)

##### **Scripts**

* `dev` | *Launch server developpement to [http://localhost:3333](http://localhost:3333)*
* `start` | *Launch server production*

##### **Dependencies**

* [Cors](https://www.npmjs.com/package/cors) | *is a node.js package for providing a [Connect](https://github.com/senchalabs/connect#readme)/[Express](https://expressjs.com/fr/) middleware that can be used to enable CORS with various options.*
* [Express](https://expressjs.com/fr/) | *Infrastructure Web minimaliste, souple et rapide pour [NodeJS](https://fr.reactjs.org/)*
* [Idx](https://www.npmjs.com/package/idx) | *is a utility function for traversing properties on objects and arrays.*

# **[Access the documentation](./documentation/documentation.md)**