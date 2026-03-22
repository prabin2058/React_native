# Commerce (React Native + Expo)

A simple e-commerce mobile app built with React Native and Expo.

## Features
- Header, footer, and image slider UI sections
- Product listing and product detail views
- Category browsing
- Flash deals and special offers sections
- Cart and checkout screens
- Search section with search history

## Project Structure
- `App.js` – app entry UI composition
- `Components/` – reusable app components
  - `Cart/` – cart and checkout screens
  - `Category/` – category-related components
  - `Products/` – product list/detail components
  - `Search/` – search-related components

## Prerequisites
- Node.js 18 or newer
- npm 9 or newer
- Expo (used via `npx expo`)

## Installation
1. Install dependencies:
   npm install

## Run the app
- Start development server:
  npm start
- Run on Android:
  npm run android
- Run on iOS:
  npm run ios
- Run on Web:
  npm run web

## Dependencies
Main dependencies used in this project:
- expo `~54.0.33`
- react `19.1.0`
- react-native `0.81.5`
- expo-image-picker `~17.0.10`
- expo-status-bar `~3.0.9`
- react-native-safe-area-context `^5.7.0`
- react-dom `19.1.0`
- react-native-web `^0.21.0`

## App Info
- App name: `Commerce`
- Android package: `com.prabin7890.Commerce`

## Notes
- You can update app metadata in `app.json`.
- If dependencies change, run `npm install` again.
