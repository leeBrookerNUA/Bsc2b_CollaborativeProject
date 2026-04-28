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
import { easyQuizData } from "../data/easyQuizData";

export default function EasyQuizPage() {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = easyQuizData[currentQuestionIndex];
  const totalQuestions = easyQuizData.length;
  const hasAnswered = selectedAnswer !== null;

  function handleAnswerPress(answer: string) {
    if (hasAnswered) return;

    setSelectedAnswer(answer);

    const isCorrect = answer === currentQuestion.correctAnswer;
    const updatedScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(updatedScore);
    }

    setTimeout(() => {
      const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

      if (isLastQuestion) {
        const percentage = (updatedScore / totalQuestions) * 100;

        if (percentage >= 70) {
          router.navigate("/pages/QuizPassPage");
        } else {
          router.navigate("/pages/QuizFailPage");
        }
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

          <View style={styles.container}>
            <View style={styles.spacer20} />

            <AppText style={styles.questionCount}>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </AppText>

            <View style={styles.spacer8} />

            <QuizProgressBar
              currentQuestion={currentQuestionIndex}
              totalQuestions={totalQuestions}
            />

            <View style={styles.spacer24} />

            <QuizQuestionCard
              title={currentQuestion.question}
              subtitle="Pick the correct answer below!"
            />

            <View style={styles.spacer20} />

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
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  container: {
    width: "100%",
    marginTop: 8,
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