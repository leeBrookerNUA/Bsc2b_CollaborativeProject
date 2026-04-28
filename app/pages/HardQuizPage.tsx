import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "../../components/ActionButton";
import AnswerCard from "../../components/AnswerCard";
import AppText from "../../components/AppText";
import Header from "../../components/Header";
import QuestionCard from "../../components/QuestionCard";
import QuizProgressBar from "../../components/QuizProgressBar";
import ScreenBackground from "../../components/ScreenBackground";
import { hardQuizData } from "../../data/hardQuizData";

export default function HardQuizPage() {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = hardQuizData[currentQuestionIndex];
  const totalQuestions = hardQuizData.length;
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
            title="Hard Quiz"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/QuizSelectPage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
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