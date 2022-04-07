![logo](./src/images/physiopet-logo.png)
# Welcome to PhysioPet!!!
## Table of Contents

- [Welcome to PhysioPet!!!](#welcome-to-physiopet)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Tech Stack](#tech-stack)
  - [How to Use](#how-to-use)
    - [First step: Opening the app](#first-step-opening-the-app)
    - [Second step: Enjoying the experience](#second-step-enjoying-the-experience)
      - [`/`](#)
      - [`/register`](#register)
      - [`/register/pet`](#registerpet)
      - [`/login`](#login)
      - [`/profile`](#profile)

## Introduction

This is a project made for GeeksHubs Academy, in which we had to create the FrontEnd of a Veterinary Clinic using React and Redux, using a previously made RESTful API.

## Tech Stack

The following technologies have been used:

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>

<a href="https://reactjs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="javascript" width="40" height="40"/></a>

<a href="https://www.tutorialspoint.com/redux/redux_devtools.htm" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="javascript" width="40" height="40"/></a>

<a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="javascript" width="40" height="40"/></a>

<a href="https://desarrolloweb.com/home/html" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="javascript" width="40" height="40"/></a>
</p>

## How to Use

### First step: Opening the app

You can access the app by clicking on the following link: [PhysioPet App](https://develop.d25c2pzs7kgt8r.amplifyapp.com/)

_Disclaimer: Keep in mind this is a MVP(minimum viable product)_

### Second step: Enjoying the experience

#### `/`

You will be shown our homePage, where you should Register yourself if you have never used the app before.

#### `/register`

In this page you will have to introduce the following information:

```html
Name:
Phone Number:
Email:
Password:
```
Afterwards, when clicking on ACCEPT, you will be redirected to register your first Pet

#### `/register/pet`

In this page you will have to introduce the following information:

```html
Pet Name:
Age:
Species:
Allergies:
```

After sucessfully registering your pet, you will be presented with a banner that confirms your register: Click on the ❌ to proceed to the next page:

#### `/login`

Here you will need to enter your email and password. If they are correct, you will be redirected to your profile page:

#### `/profile`

On this page you can see a list with all of your pets. You can:
- Add new pet
- See each pet's appointments history

If you click on `Add New Pet`