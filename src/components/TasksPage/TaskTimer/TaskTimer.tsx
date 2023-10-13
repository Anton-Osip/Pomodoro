import React, { useState } from 'react'
import { HeaderTimer } from './HeaderTimer/HeaderTimer'
import { BodyTimer } from './BodyTimer/BodyTimer'
import { IRootState } from '../../../redux/rootReducer'
import { ISettingsState, ITaskData, ITasksState } from '../../../redux/tasksReducer'
import { useSelector } from 'react-redux'
//@ts-ignore
import mp3 from '../../../assets/audio/sound.mp3'
//@ts-ignore
import wav from '../../../assets/audio/sound.wav'

export function TaskTimer() {
	const tasks = useSelector<IRootState, ITasksState>(store => store.tasks)
	const soundPlay = useSelector<IRootState>(store => store.tasks.soundPlay)
	const settingSoundPlay = useSelector<IRootState, boolean>(store => store.tasks.settings.sound)
	let activeTask: ITaskData = tasks.tasks[0]
	let taskNum: number = 0
	tasks.tasks.map((task, index) => {
		if (task.taskIsActive === true) {
			activeTask = { ...task }
			taskNum = index + 1
		}
	})

	return (
		<>
			{soundPlay && settingSoundPlay ? (
				<audio autoPlay>
					<source src={mp3} />
					<source src={wav} />
				</audio>
			) : (
				<></>
			)}

			{tasks.tasks.length === 0 ? (
				<>
					<div className='col-lg-7 col-12 task-timer__wrapper'>
						<div className='task-timer__text'>Создайте новую задачу</div>
					</div>
				</>
			) : (
				<div className='col-lg-7 col-12'>
					<HeaderTimer
						name={activeTask.name}
						completedTask={activeTask.completedTask}
						taskIsWork={activeTask.taskIsWork}
						taskIsPauseWork={activeTask.taskIsPauseWork}
						taskIsBreak={activeTask.taskIsBreak}
						taskIsPauseBreak={activeTask.taskIsPauseBreak}
					/>
					<BodyTimer
						id={activeTask.id}
						name={activeTask.name}
						taskNum={taskNum}
						time={activeTask.time}
						taskIsWork={activeTask.taskIsWork}
						taskIsPauseWork={activeTask.taskIsPauseWork}
						taskIsBreak={activeTask.taskIsBreak}
						taskIsPauseBreak={activeTask.taskIsPauseBreak}
					/>
				</div>
			)}
		</>
	)
}
