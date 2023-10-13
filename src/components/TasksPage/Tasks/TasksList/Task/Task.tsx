import React from 'react'
import { TaskMenu } from './TaskMenu/TaskMenu'
import { EditName } from './TaskMenu/TaskMenuItem/EditName/EditName'
import { Popup } from '../../../../utils/Popup/Popup'
import { useDispatch } from 'react-redux'
import { setActiveTask } from '../../../../../redux/tasksReducer'
import { Transition } from 'react-transition-group'

interface ITaskProps {
	id: string
	name: string
	totalTask: number
	isEditName: boolean
	isPopupOpen: boolean
	nightThemes: boolean
}

export function Task({ id, name, totalTask, isEditName, isPopupOpen, nightThemes }: ITaskProps) {
	const dispatch = useDispatch()
	return (
		<div
			className='task'
			onClick={() => {
				dispatch(setActiveTask(id))
			}}
		>
			<Transition in={isPopupOpen} timeout={500} mountOnEnter unmountOnExit>
				{state => <Popup id={id} state={state} nightThemes={nightThemes} />}
			</Transition>

			<div className='task__info'>
				<div className='task__quantity'>{totalTask}</div>
				{isEditName ? <EditName id={id} name={name} /> : <div className='task__name'>{name}</div>}
			</div>
			<TaskMenu id={id} totalTask={totalTask} nightThemes={nightThemes} />
		</div>
	)
}
