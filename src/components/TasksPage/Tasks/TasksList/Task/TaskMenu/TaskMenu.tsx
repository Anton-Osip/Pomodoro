import React from 'react'
import { Dropdown } from '../../../../../utils/Dropdown/Dropdown'
import { Icon } from '../../../../../utils/Icon/Icon'
import { TaskMenuItem } from './TaskMenuItem/TaskMenuItem'

interface ITaskMenuProps {
	id: string
	totalTask: number
	nightThemes:boolean
}

export function TaskMenu({ id, totalTask, nightThemes }: ITaskMenuProps) {
	return (
		<div className='task-menu'>
			<Dropdown
				button={
					<button className='task-menu__btn'>
						<Icon name={'MenuBtnIcon'} />
					</button>
				}
			>
				<TaskMenuItem id={id} totalTask={totalTask} nightThemes={nightThemes} />
			</Dropdown>
		</div>
	)
}
