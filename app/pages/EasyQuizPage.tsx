import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../components/base/AppText";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import ActionButton from "../../components/buttons/ActionButton";
import QuizAnswerCard from "../../components/quiz/QuizAnswerCard";
import QuizProgressBar from "../../components/quiz/QuizProgressBar";
import QuizQuestionCard from "../../components/quiz/QuizQuestionCard";
import { easyQuizData } from "../../data/easyQuizData";

// This screen displays the easy quiz.
// It shows one question at a time, checks the selected answer, tracks the user's score, and sends them to a pass or fail page at the end.
export default function EasyQuizPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  // Stores which question the user is currently viewing.
  // This is used to get the correct question from easyQuizData.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Stores the answer the user has selected.
  // It starts as null because no answer has been chosen yet.
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Tracks how many questions the user has answered correctly.
  const [score, setScore] = useState(0);

  // Gets the current question object from the quiz data array.
  const currentQuestion = easyQuizData[currentQuestionIndex];

  // Stores the total number of questions so it can be reused in the page.
  const totalQuestions = easyQuizData.length;

  // Checks whether the user has already selected an answer.
  // This helps prevent them from pressing multiple answers for one question.
  const hasAnswered = selectedAnswer !== null;

  // Runs when the user selects an answer card.
  // It checks if the answer is correct, updates the score, then moves to the next question.
  function handleAnswerPress(answer: string) {

    // Prevents the user from changing their answer after already selecting one.
    if (hasAnswered) return;

    // Stores the selected answer so the card can show correct or wrong feedback.
    setSelectedAnswer(answer);

    // Checks whether the selected answer matches the correct answer for this question.
    const isCorrect = answer === currentQuestion.correctAnswer;

    // Calculates the score that should be used after this answer.
    // This is needed because React state does not update instantly.
    const updatedScore = isCorrect ? score + 1 : score;

    // Only updates the score state if the user selected the correct answer.
    if (isCorrect) {
      setScore(updatedScore);
    }

    // Adds a short delay so the user can see the answer feedback before the quiz moves to the next question or result page.
    setTimeout(() => {

      // Checks whether the current question is the final question in the quiz.
      const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

      if (isLastQuestion) {

        // Calculates the user's final percentage score.
        const percentage = (updatedScore / totalQuestions) * 100;

        // Sends the user to the pass page if they score 70% or higher.
        // Otherwise, they are sent to the fail page.
        if (percentage >= 70) {
          router.navigate("/pages/QuizPassPage");
        } else {
          router.navigate("/pages/QuizFailPage");
        }
      } else {

        // Moves to the next question and clears the selected answer so the next question starts fresh.
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      }
    }, 900);
  }

  // Decides which visual state each answer card should use.
  // This allows correct answers to turn green and wrong selected answers to show as wrong.
  function getAnswerState(answer: string) {

    // Before the user answers, all cards stay in their default state.
    if (!selectedAnswer) {
      return "default";
    }

    // Shows the correct answer once the user has selected an option.
    if (answer === currentQuestion.correctAnswer) {
      return "correct";
    }

    // Shows the selected answer as wrong if it does not match the correct answer.
    if (answer === selectedAnswer && answer !== currentQuestion.correctAnswer) {
      return "wrong";
    }

    // Any other answer stays in the default style.
    return "default";
  }

  return (

    <ScreenBackground>

      {/*  Main page layout. The quiz content is kept near the top, while the Back Home button stays near the bottom. */}
      <View style={styles.page}>
        <View>
        
          <Header
            title="Easy Quiz"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/QuizSelectPage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/*Container adds padding around the quiz content so it does not touch the edges of the screen. */}
          <View style={styles.container}>

            {/* Adds space between the header and the question counter. */}
            <View style={styles.spacer20} />

            {/* Displays the current question number and total number of questions. */}
            <AppText style={styles.questionCount}>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </AppText>

            {/* Adds spacing between the question counter and progress bar. */}
            <View style={styles.spacer8} />

            {/* Progress bar shows how far through the quiz the user is. It uses the current question index and total question count. */}
            <QuizProgressBar
              currentQuestion={currentQuestionIndex}
              totalQuestions={totalQuestions}
            />

            <View style={styles.spacer24} />

            {/* Displays the current quiz question inside a reusable card component. */}
            <QuizQuestionCard
              title={currentQuestion.question}
              subtitle="Pick the correct answer below!"
            />

            <View style={styles.spacer20} />

            {/* Loops through the answers for the current question. Each answer is displayed as a separate clickable answer card */}
            {currentQuestion.answers.map((answer) => (
              <View key={answer} style={styles.answerWrapper}>
                <QuizAnswerCard
                  title={answer}
                  state={getAnswerState(answer)}
                  disabled={hasAnswered}
                  onAnswerPress={() => handleAnswerPress(answer)}
                />

              </View>
            ))}
          </View>
        </View>

        {/* Button used to return directly to the Home page. */}
        <ActionButton
          title="Back Home"
          backgroundColor="rgba(255, 255, 255, 0.22)"
          pressedBackgroundColor="rgba(255, 255, 255, 0.35)"
          onBackHomePress={() => {
            router.navigate("/pages/HomePage");
          }}
        />

      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({

  // Main page container.
  // flexGrow helps the page fill the available height, while space-between separates the quiz content from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the quiz content.
  // The padding keeps the content away from the edges of the screen.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  // Styles the question counter text displayed above the progress bar.
  questionCount: {
    fontSize: 16,
    textAlign: "center",
  },

  // Adds space underneath each answer card.
  answerWrapper: {
    marginBottom: 12,
  },

  spacer8: {
    height: 8,
  },

  spacer20: {
    height: 20,
  },

  spacer24: {
    height: 24,
  },
});