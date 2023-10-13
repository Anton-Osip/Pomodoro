import React, { useEffect } from 'react'
import { formatForMinuts } from '../../../../../utils/time'
import { useDispatch } from 'react-redux'
import {
	addOneMinute,
	setNumberOfComplitedTasks,
	setSec,
	setSecWorkingTime,
	setSoundPlay,
	startTaskBreak,
	taskSkip,
} from '../../../../../redux/tasksReducer'

interface IDielTimerProps {
	time: number
	id: string
	taskIsWork: boolean
	taskIsBreak: boolean
}

export function DielTimer({ time, id, taskIsWork, taskIsBreak }: IDielTimerProps) {
	const dispatch = useDispatch()

	useEffect(() => {
		let workTimer: any
		let soundOff: any

		if (time > 0 && (taskIsWork || taskIsBreak)) {
			workTimer = setTimeout(() => {
				dispatch(setSec(id))
				if (taskIsWork && !taskIsBreak) dispatch(setSecWorkingTime())
			}, 1000)
		}
		if (time === 0 && taskIsWork) {
			dispatch(startTaskBreak(id))
		}

		if (time === 0 && taskIsBreak) {
			dispatch(taskSkip(id))
			dispatch(setNumberOfComplitedTasks())
		}
		if (time === 0) {
			dispatch(setSoundPlay(true))
			soundOff = setTimeout(() => {
				dispatch(setSoundPlay(false))
			}, 2000)
		}
		return () => {
			if (workTimer) {
				clearTimeout(workTimer)
				clearTimeout(soundOff)
			}
		}
	}, [time, taskIsWork, taskIsBreak])

	return (
		<div className='diel-timer'>
			<div
				className={
					taskIsWork
						? 'diel-timer__number diel-timer__number--taskIsWork'
						: taskIsBreak
						? 'diel-timer__number diel-timer__number--taskIsBreak'
						: 'diel-timer__number'
				}
			>
				{formatForMinuts(time)}
			</div>
			<div
				onClick={() => {
					dispatch(addOneMinute(id))
				}}
				className={
					!taskIsWork && !taskIsBreak
						? 'btn diel-timer__plus diel-timer__plus--active'
						: 'btn diel-timer__plus'
				}
			>
				+
			</div>
		</div>
	)
}
