import React from 'react'
import { TasksInfo } from './TasksInfo/TasksInfo'
import { NewTask } from './NewTask/NewTask'
import { TasksList } from './TasksList/TasksList'

export function Tasks() {
	return (
		<div className='col-lg-5 col-12'>
			<TasksInfo />
			<NewTask />
			<TasksList />
		</div>
	)
}
