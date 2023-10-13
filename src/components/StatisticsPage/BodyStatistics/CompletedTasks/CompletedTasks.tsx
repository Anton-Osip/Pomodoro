import React from 'react'
import { Icon } from '../../../utils/Icon/Icon'

interface ICompletedTasksProps {
	numberOfComplitedTasks: number
}
export function CompletedTasks({ numberOfComplitedTasks }: ICompletedTasksProps) {
	return (
		<div className='completed-tasks'>
			{numberOfComplitedTasks === 0 ? (
				<div className='completed-tasks__null'>
					<Icon name='TomatoNullIcon' />
				</div>
			) : (
				<div className='completed-tasks__present'>
					<div className='completed-tasks__body'>
						<div className='completed-tasks__icon'>
							<Icon name='TomatoIcon' />
						</div>
						x&nbsp;<div className='completed-tasks__num'>{numberOfComplitedTasks}</div>
					</div>
					<div className='completed-tasks__footer'>{numberOfComplitedTasks} помидора</div>
				</div>
			)}
		</div>
	)
}
