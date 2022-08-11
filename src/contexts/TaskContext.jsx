import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import TaskReducer from "../reducers/TaskReducer";


export function useTask() {
  const [TaskState, dispatch] = useReducer(TaskReducer, {
    quests: [],
    missions: []
  });

  useEffect(() => {
    return database.task
      .onSnapshot((snapshot) => {
        dispatch({
          type: "SET_QUESTS",
          payload: { quests: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, []);

  return TaskState;
}