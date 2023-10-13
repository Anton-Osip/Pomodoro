import React from 'react'
import { SelectedDay } from './SelectedDay/SelectedDay'
import { Schedule } from './Schedule/Schedule'
import { CompletedTasks } from './CompletedTasks/CompletedTasks'
import { Focus } from './Focus/Focus'
import { PauseTime } from './PauseTime/PauseTime'
import { Stops } from './Stops/Stops'

import { useStatSelectedWeek } from '../../../hook/useStatSelectedWeek'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/rootReducer'
import { IStatisticsDay } from '../../../redux/tasksReducer'

export function BodyStatistics() {
	useStatSelectedWeek()
	const activeWeek = useSelector<IRootState, IStatisticsDay[]>(store => store.tasks.activeWeek)

	let activeDay = {
		date: {
			fullYear: 0,
			month: 0,
			date: 0,
			day: '',
		},
		selectedDay: false,
		workingTime: 0,
		pouseTime: 0,
		stops: 0,
		numberOfComplitedTasks: 0,
	}
	activeWeek.map(day => {
		if (day.selectedDay) {
			activeDay = day
		}
	})

	return (
		<div className='body-statistics'>
			<SelectedDay workingTime={activeDay.workingTime} day={activeDay.date.day} />
			<Schedule activeWeek={activeWeek} />
			<CompletedTasks numberOfComplitedTasks={activeDay.numberOfComplitedTasks} />
			<Focus
				selectDay={activeDay.selectedDay}
				pauseTime={activeDay.pouseTime}
				workingTime={activeDay.workingTime}
			/>
			<PauseTime selectDay={activeDay.selectedDay} pauseTime={activeDay.pouseTime} />
			<Stops selectDay={activeDay.selectedDay} stops={activeDay.stops} />
		</div>
	)
}
