import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	pouseTaskWorking,
	setNumberOfComplitedTasks,
	setSecPouseTime,
	setStops,
	startTaskBreak,
	startTaskWorking,
	stopTaskWorking,
	taskSkip,
	сontinueTaskWorking,
} from '../../../../../redux/tasksReducer'
interface IMenuTimerProps {
	id: string
	taskIsWork: boolean
	taskIsPauseWork: boolean
	taskIsBreak: boolean
	taskIsPauseBreak: boolean
}
export function MenuTimer({
	id,
	taskIsWork,
	taskIsPauseWork,
	taskIsBreak,
	taskIsPauseBreak,
}: IMenuTimerProps) {
	const dispatch = useDispatch()

	useEffect(() => {
		let breakTimer: any

		if (taskIsPauseWork) {
			breakTimer = setTimeout(() => {
				dispatch(setSecPouseTime())
			}, 1000)
		}
		return () => {
			if (breakTimer) {
				clearTimeout(breakTimer)
			}
		}
	})

	return (
		<div className='menu-timer'>
			{!taskIsWork && !taskIsPauseWork && !taskIsBreak && !taskIsPauseBreak && (
				<button
					className='btn menu-timer__btn--start'
					onClick={() => {
						dispatch(startTaskWorking(id))
					}}
				>
					Старт
				</button>
			)}

			{(taskIsWork || taskIsBreak) && (
				<button
					className='btn menu-timer__btn--pause'
					onClick={() => {
						dispatch(pouseTaskWorking(id))
					}}
				>
					Пауза
				</button>
			)}

			{!taskIsPauseWork && !taskIsBreak && !taskIsPauseBreak && (
				<button
					className='btn menu-timer__btn--stop'
					disabled={false}
					onClick={() => {
						dispatch(stopTaskWorking(id))
						dispatch(setStops())
					}}
				>
					Стоп
				</button>
			)}

			{(taskIsPauseWork || taskIsPauseBreak) && (
				<button
					className='btn menu-timer__btn--сontinue'
					onClick={() => {
						dispatch(сontinueTaskWorking(id))
					}}
				>
					Продолжить
				</button>
			)}

			{taskIsPauseWork && (
				<button
					className='btn menu-timer__btn--made'
					onClick={() => {
						dispatch(startTaskBreak(id))
					}}
				>
					Сделано
				</button>
			)}
			{(taskIsBreak || taskIsPauseBreak) && (
				<button
					className='btn menu-timer__btn--skip'
					onClick={() => {
						dispatch(taskSkip(id))
						dispatch(setNumberOfComplitedTasks())
					}}
				>
					Пропустить
				</button>
			)}
		</div>
	)
}
