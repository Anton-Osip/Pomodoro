import React from 'react'
import { DielTimer } from './DielTimer/DielTimer'
import { MenuTimer } from './MenuTimer/MenuTimer'

interface IBodyTimerProps {
	id: string
	name: string
	time: number
	taskNum: number
	taskIsWork: boolean
	taskIsPauseWork: boolean
	taskIsBreak: boolean
	taskIsPauseBreak: boolean
}

export function BodyTimer({
	id,
	name,
	time,
	taskNum,
	taskIsWork,
	taskIsPauseWork,
	taskIsBreak,
	taskIsPauseBreak,
}: IBodyTimerProps) {
	return (
		<div className='body-timer'>
			<DielTimer time={time} id={id} taskIsWork={taskIsWork} taskIsBreak={taskIsBreak} />
			<div className='body-timer__info'>
				<div className='body-timer__task-num'>Задача {taskNum} - </div>
				<div className='body-timer__task-name'> {name} </div>
			</div>
			<MenuTimer
				taskIsWork={taskIsWork}
				id={id}
				taskIsPauseWork={taskIsPauseWork}
				taskIsPauseBreak={taskIsPauseBreak}
				taskIsBreak={taskIsBreak}
			/>
		</div>
	)
}
