# tradingApp

## ⛩ Introduction

EasyCall is a web app for meetings, chats and collaborate at one place. It is built using React for frontend, Express , Sockets server and Twilio for handling APIs and communication, and Firestore for database.

## 💡 Why did I build this?

In the ongoing pandemic, the need for software that allows communication and collaboration in form of screen sharing or live whiteboard has become a necessity. Since the problem was quite widespread and technologically interesting so I decided to make this project.

## 🛠️ Local development

That's pretty easy. To ensure that you are able to install everything properly, we would recommend you to have <b>Git</b>, <b>NPM</b> and <b>Node.js</b> installed.

We will first start with setting up the Local Project Environment:

```sh
git clone https://github.com/apoorvdwi/EasyCall.git
cd EasyCall
npm run dev:install
```

Once you run the Commands and get environment variables and everything fine, we are all set to run the app ✔️

On the root level run the following command:

```sh
npm run dev
```

To lint the code files, run the following command on root level:

```sh
npm run lint
```

## 🥁 Features

- EasyCall provides social login through Google and Github.
- User can create and join meetings.
- The project is easily scalable to 10 participants but for now the participant limit has been capped at 2 to prevent misuse and keep api costs in limit.
- Within the meeting, there are several functionalities provided like screen sharing, chat window for participants and whiteboard.
- The whiteboard is powered by excalidraw, which provides a lot of functionalities for collaboration.
