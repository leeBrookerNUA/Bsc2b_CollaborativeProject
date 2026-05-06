# Energy Learning Toy App

## Overview

This project is a mobile app built with [React Native](https://reactnative.dev/docs/getting-started), [Expo](https://docs.expo.dev/), and [Expo Router](https://docs.expo.dev/router/introduction/). The app is designed to support an interactive educational toy that helps children learn about renewable energy, battery charging, and energy-saving habits.
The app uses a bright, child-friendly interface with large buttons, colourful cards, quizzes, facts, tips, and simple settings screens. It is designed to be easy to navigate and suitable for younger users.

---

## Main Features

### Home Screen

The home screen acts as the main menu of the app. From here, users can access:

- Instructions
- Facts & Tips
- Quiz
- Play

---

### Instructions Page

The instructions page explains how to use the toy step by step. It includes guidance such as:

- Turning on the toy
- Connecting the toy to Wi-Fi
- Using the hand crank or sunlight
- Watching the battery charge in the app

---

### Facts & Tips Screen

The fun facts page contains swipeable fact cards. Users can choose between different categories.

- Solar
- Wind
- Manual

Each fact is displayed using colourful cards with icons and short explanations.

---

### Quiz Screen

The app includes an educational quiz section with two difficulty levels:

- Easy quiz
- Hard quiz

The quizzes show one question at a time, track the user's score, and give instant feedback when an answer is selected

At the end of the quiz , the user is taken to either:

- A pass screen
- A fail screen

This encourages learning through feedback and repetition.

---

### Play Screen

The play screen shows the toy's charging progress and live activity. It includes:

- Battery charge display
- Hand crank status
- Charging stats
- Live fun fact
- Helpful charging tip

This screen helps users understand how their actions, such as turning a hand crank, can generate energy.

---

### Settings Screen

The settings section includes

#### Audio Settings

- Volume Display
- Voice on/off switch

#### Visual & Accessibility Settings

- Text size controls
- High contrast switch
- Colour blind mode switch

#### Connection Settings

- Wi-Fi status
- Bluetooth Switch

These settings are designed to make the app easier to use and more accessible.

---

## Technologies Used

- [React Native](https://reactnative.dev/docs/getting-started)
- [React](https://react.dev/)
- [Expo](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [Expo Audio](https://docs.expo.dev/versions/latest/sdk/audio/)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- [Expo Google Fonts](https://docs.expo.dev/develop/user-interface/fonts/)
- [React Native Safe Area Context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)
- [React Native Gesture Handler](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)

This project was created using the following command:

```bash
npx create-expo-app@latest --template default@sdk-55
```

---

## Project Structure

```txt
app/
   _layout.tsx
   index.tsx
   pages/
      HomePage.tsx
      PlayPage.tsx
      FactsTipsPage.tsx
      ...

components/
   badges/
   base/
   buttons/
   cards/
   quiz/
   settings/

data/
   easyQuizData.ts
   hardQuizData.ts
   factData.ts

assets/
   audio/
      audio.ts
   stars-bg.png

```

---

## Installation

Follow these steps to set up and run the project on your computer.

### 1. Clone the project:

```bash
git clone <your repo-link>
```

### 2. Open the project folder

```bash
cd <project-folder-name>
```

### 3. Install the project dependencies

```bash
npm install
```

### 4. Start the Expo development server

```bash
npx expo start
```

### 5. Run the app

After running the start command, Expo will open a development menu.

You can run the app using one of these options:

- Scan the QR code with the Expo Go app on your phone
- Press `a` to open the app on an Android emulator
- Press `i` to open the app on an iOS simulator
- Press `w` to open the app in a web browser

### 6. Stop the server

To stop the Expo development server press:

```bash
Ctrl + C
```

---

## Fonts

The app uses custom Google Fonts:

- Fredoka
- Quicksand

These fonts are loaded in the root layout before the app screens are shown. This prevents the app from displaying text in the wrong default font while loading.

---

## Navigation

Navigation is handled using **Expo Router**.

The `index.tsx` file redirects the user straight to the Home page:

```ts
<Redirect href="/pages/HomePage" />
```

Each page uses `useRouter()` to navigate between screens.

```ts
router.navigate("/pages/HomePage");
```

---

## Reusable Components

The app is built using reusable components to keep the code organised and consistent.

For Example:

- Header
- ScreenBackground
- Main Button
- Action Button
  ...

Using reusable components makes the project easier to maintain and helps keep the design consistent across all screens.

---

## Future Improvements

Possible future improvements could include:

- Connecting the app fully to the toy
- Making the volume slider interactive
- Saving quiz scores
- Adding more quiz questions
- Adding more fact categories
- Adding animations to the charging screen
- Storing accessibility settings permanently
- Adding voice feedback to the mascot

---

## Project Status

This project is currently a working prototype. It demonstrates the main app screens, navigation, reusable components, quiz system , and user interface design for an educational energy toy app.
