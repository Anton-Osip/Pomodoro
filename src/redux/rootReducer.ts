import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import tasksReducer, { ITasksState } from './tasksReducer'

export interface IRootState {
	tasks: ITasksState
}

const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer: Reducer<IRootState> = combineReducers({
	tasks: tasksReducer,
})

const persistedReducer: any = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
export default store
