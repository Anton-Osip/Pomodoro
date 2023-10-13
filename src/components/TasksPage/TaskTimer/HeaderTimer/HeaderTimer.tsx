import React from 'react'

interface IHeaderTimerProps {
	name: string
	completedTask: number
	taskIsWork: boolean
	taskIsPauseWork: boolean
	taskIsBreak: boolean
	taskIsPauseBreak: boolean
}

export function HeaderTimer({
	name,
	completedTask,
	taskIsWork,
	taskIsPauseWork,
	taskIsBreak,
	taskIsPauseBreak,
}: IHeaderTimerProps) {
	return (
		<div
			className={
				taskIsWork || taskIsPauseWork
					? 'header-timer header-timer--taskIsWork'
					: taskIsBreak || taskIsPauseBreak
					? 'header-timer header-timer--taskIsBreak'
					: 'header-timer'
			}
		>
			<p className='header-timer__name'>{name}</p>
			<p className='header-timer__num'>Помидор {completedTask + 1}</p>
		</div>
	)
}
