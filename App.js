import { useEffect, useState } from "react";
import GoalItem from "./components/GoalItem";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import { Authorize } from "./services/authorizationService";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    Authorize("demo@driver.com", "parola");
    
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
      // FLatList se uita in obiect si cauta daca are proprietatea de ley si o pune automat
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
            // asa ii spunem la flatlist ca key este idul
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
