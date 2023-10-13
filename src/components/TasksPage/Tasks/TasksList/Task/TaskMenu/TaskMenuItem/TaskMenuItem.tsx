import React from 'react'
import { Icon } from '../../../../../../utils/Icon/Icon'
import { useDispatch } from 'react-redux'
import {
	changeIsEditName,
	decreaseTotalTask,
	increaseTotalTask,
	openPopup,
} from '../../../../../../../redux/tasksReducer'

interface ITaskMenuItemProps {
	id: string
	totalTask: number
	nightThemes: boolean
}

export function TaskMenuItem({ totalTask, id, nightThemes }: ITaskMenuItemProps) {
	const dispatch = useDispatch()

	let isCount = totalTask > 1
	return (
		<ul className={nightThemes ? 'menu-list menu-list--night' : 'menu-list'}>
			<li
				className='menu-list__item '
				onClick={() => {
					dispatch(increaseTotalTask(id))
				}}
			>
				<Icon name={'ControlPlusIcon'} size={18} />
				<p className='menu-list__text '>Увеличить</p>
			</li>
			<li
				className={isCount ? 'menu-list__item' : 'menu-list__item menu-list__item--disabled'}
				onClick={() => {
					if (isCount) dispatch(decreaseTotalTask(id))
				}}
			>
				<Icon name={'ControlMinusIcon'} size={18} />
				<p className='menu-list__text '>Уменьшить</p>
			</li>
			<li
				className='menu-list__item '
				onClick={() => {
					dispatch(changeIsEditName(id))
				}}
			>
				<Icon name={'EditIcon'} size={18} />
				<p className='menu-list__text '>Редактировать</p>
			</li>
			<li
				className='menu-list__item '
				onClick={() => {
					dispatch(openPopup(id))
				}}
			>
				<Icon name={'DeleteIcon'} size={18} />
				<p className='menu-list__text '>Удалить</p>
			</li>
		</ul>
	)
}
