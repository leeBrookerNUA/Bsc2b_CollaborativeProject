import { Audio } from "expo-av";

let clickSound: Audio.Sound | null = null;


// Loads the click sound into memory
export const loadSound = async () => {
  // Unloads the previous sound if there is one
  if (clickSound) {
    await clickSound.unloadAsync();
    clickSound = null;
  }

  // Loads the sound file
  const result = await Audio.Sound.createAsync(
    require("../assets/audio/testSound2.wav")
  );

  clickSound = result.sound;
};

// Plays the loaded click sound
export const playLoadedSound = async () => {
  if (!clickSound) return;

  await clickSound.replayAsync();
};