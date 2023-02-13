import { call, put, takeEvery } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice"

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "coś poszło nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    console.log("Saga jest podłączona!");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);

};