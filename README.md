# smart-forms-examples

Smart forms examples and tutorials

# Introduction

This application is a reference example for the different uses of Genesis Foundation Forms. 

There are examples using just the front end and both front end and backend together.

It is intended to be a companion piece to the docs on [Genesis Learn - Web - Forms](https://learn.genesis.global/docs/web/forms/foundation-forms/)

Note, some forms use the backend generated meta data feature and will not work if the backend is not configured correctly.

## Next Steps

To get a simple application running follow the steps on [Build and Remap](https://learn.genesis.global/docs/getting-started/quick-start/prepare-the-server-and-build/) to build the backend.

Once the backend is built and running, run the front. Switch to the `client` directory and run

```ts
npm run dev
```

If you need an introduction to the Genesis platform and its modules it's worth heading [here](https://learn.genesis.global/docs/getting-started/learn-the-basics/simple-introduction/).


## Project Structure

This project contains **server** and **client** directories which contain the server and client code respectively.

### Server

The server code for this project can be found [here](./server/README.md).
It is built using a DSL-like definition based on the Kotlin language: GPAL.

When first opening the project, if you receive a notification from IntelliJ IDE detecting Gradle project select the option to 'Load as gradle project'.

### Web Client

The Web client for this project can be found [here](./client/README.md). It is built using Genesis's next
generation web development framework, which is based on Web Components.

# License

This is free and unencumbered software released into the public domain. For full terms, see [LICENSE](./LICENSE)

**NOTE** This project uses licensed components listed in the next section, thus licenses for those components are required during development.

## Licensed components
Genesis low-code platform
