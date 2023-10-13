import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Content } from './components/utils/Content/Content'
import { TasksPage } from './components/TasksPage/TasksPage'
import { StatisticsPage } from './components/StatisticsPage/StatisticPage'
import { useDispatch } from 'react-redux'
import { creatNewDay } from './redux/tasksReducer'
import { SettingsPage } from './components/SettingsPage/SettingsPage'
import { useSelector } from 'react-redux'
import { IRootState } from './redux/rootReducer'

export function App() {
	const dispatch = useDispatch()
	const nightThemes = useSelector<IRootState, boolean>(store => store.tasks.settings.nightThemes)
	useEffect(() => {
		dispatch(creatNewDay())
	})
	return (
		<div className={nightThemes ? 'night' : ''}>
			<Header />
			<Content>
				<Routes>
					<Route path='/pomodoro' element={<TasksPage />} />
					<Route path='/statistics' element={<StatisticsPage />} />
					<Route path='/settings' element={<SettingsPage />} />
					<Route path='/' element={<Navigate to={'/pomodoro'} />} />
				</Routes>
			</Content>
		</div>
	)
}
