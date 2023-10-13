import React from 'react'
import { Task } from './Task/Task'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../../redux/rootReducer'
import { ITasksState } from '../../../../redux/tasksReducer'
import { formatForHour } from '../../../../utils/time'

export function TasksList() {
	const tasks = useSelector<IRootState, ITasksState>(store => store.tasks)
	const nightThemes = useSelector<IRootState, boolean>(store => store.tasks.settings.nightThemes)

	function getAllTime() {
		let count: number = 0

		tasks.tasks.map(task => {
			count += 1500 * task.totalTask
		})
		return count
	}

	return (
		<>
			<div className='task-list'>
				{tasks.tasks.map(task => (
					<Task
						key={task.id}
						name={task.name}
						id={task.id}
						totalTask={task.totalTask}
						isEditName={task.isEditName}
						isPopupOpen={task.isPopupOpen}
						nightThemes={nightThemes}
					/>
				))}

				<p className='task-list__time'>{formatForHour(getAllTime())}</p>
			</div>
		</>
	)
}
