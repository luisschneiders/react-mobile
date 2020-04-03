# Ionic, React & Firebase App

## Table of Contents

- [Synopsis](#synopsis)
- [Installation](#installation)
- [License](#license)

## Synopsis

This is an Ionic Framework app that uses React and uses Firebase to authenticate the user.
The app has a login, signup and logout process flow. The content is visible to the user based on their status (authenticated or unauthenticated).

The app uses React Hooks API, which lets you use state and other React features without writing a class.


## Installation

### Ionic Framework - React 
* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://git@github.com:luisschneiders/react-mobile.git`.
* Run `npm install` from the project root.
* Install [firebase](#firebase).
* Install [capacitor](#capacitor) (if you want to emulate it on a mobile device).
* Run `ionic serve` in a terminal from the project root.

### Firebase ###
Firebase gives you the tools to develop high-quality apps. For more information about Firebase, please visit Google Firebase Documentation: `https://firebase.google.com/docs/`

* Install Firebase `npm i firebase --save`
* Install firebase types `npm i @types/firebase --save-dev`

Information about how to configure the firebase connection is also available at [Google Firebase Documentation](https://firebase.google.com/docs/)

### Capacitor ###
Invoke Native SDKs on iOS, Android, Electron, and the Web with one code base. Optimized for Ionic Framework apps, or use with any web app framework.

Capacitor has a number of dependencies depending on which platforms you're targeting and which operating systems you are developing on. For more info, please visit: `https://capacitor.ionicframework.com/`.

#### iOS Development ####
For building iOS apps, Capacitor requires a Mac with Xcode 11 or above. 

Additionally, you'll need to install CocoaPods `(sudo gem install cocoapods)`, and install the Xcode Command Line tools (either from Xcode, or running `xcode-select --install`).
* Install cocoapods `sudo gem install cocoapods` or update ``.
* Run `npx cap add ios`.
* Run `npx cap open ios`.

#### Android Development ####
Android development requires the Android SDK installed with Android Studio. Technically, Android Studio isn't required as you can build and run apps using only the Android CLI tools, but it will make building and running your app much easier so they strongly recommend using it.

Android version support for Capacitor is more complex than iOS. Currently, they are targeting API level 21 or greater, meaning Android 5.0 (Lollipop) or above.

## License

React Mobile App is open source software [licensed as ISC](https://github.com/luisschneiders/react-mobile/blob/master/LICENSE).
