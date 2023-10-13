import React from 'react'
import { Tasks } from './Tasks/Tasks'
import { TaskTimer } from './TaskTimer/TaskTimer'

export function TasksPage() {
	return (
		<div className='row'>
			<Tasks />
			<TaskTimer />
		</div>
	)
}
