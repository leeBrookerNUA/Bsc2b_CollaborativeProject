import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AnswerCard from "../components/AnswerCard";
import AppText from "../components/AppText";
import BackHomeCard from "../components/BackHomeCard";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import QuizProgressBar from "../components/QuizProgressBar";
import ScreenBackground from "../components/ScreenBackground";
import { hardQuizData } from "../data/hardQuizData";

export default function HardQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuestion = hardQuizData[currentQuestionIndex];
  const totalQuestions = hardQuizData.length;

  const hasAnswered = selectedAnswer !== null;

  function handleAnswerPress(answer: string) {
    if (hasAnswered) return;

    setSelectedAnswer(answer);

    setTimeout(() => {
      const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

      if (isLastQuestion) {
        console.log("Quiz finished");
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      }
    }, 900);
  }

  function getAnswerState(answer: string) {
    if (!selectedAnswer) {
      return "default";
    }

    if (answer === currentQuestion.correctAnswer) {
      return "correct";
    }

    if (answer === selectedAnswer && answer !== currentQuestion.correctAnswer) {
      return "wrong";
    }

    return "default";
  }

  return (
    <ScreenBackground>
      <View style={styles.page}>
        <View>
          <Header
            title="Hard Quiz"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => console.log("Back Pressed")}
            onSettingsPress={() => console.log("Settings Pressed")}
          />

          <View style={styles.spacer20} />
          <View style={styles.container}> 
          <AppText style={styles.questionCount}>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </AppText>

          <View style={styles.spacer8} />

          <QuizProgressBar
            currentQuestion={currentQuestionIndex}
            totalQuestions={totalQuestions}
          />

          <View style={styles.spacer24} />

          <QuestionCard
            title={currentQuestion.question}
            subtitle="Pick the correct answer below!"
          />

          <View style={styles.spacer20} />

          {currentQuestion.answers.map((answer) => (
            <View key={answer} style={styles.answerWrapper}>
              <AnswerCard
                title={answer}
                state={getAnswerState(answer)}
                disabled={hasAnswered}
                onAnswerPress={() => handleAnswerPress(answer)}
              />
            </View>
          ))}
        </View>
      </View>

      <BackHomeCard
        title="Back Home"
        onBackHomePress={() => console.log("Back Home Pressed")}
      />
    </View>
    </ScreenBackground >
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    padding: 16,
  },
  questionCount: {
    fontSize: 16,
    textAlign: "center",
  },
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