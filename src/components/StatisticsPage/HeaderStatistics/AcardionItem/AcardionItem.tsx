import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedWeek } from '../../../../redux/tasksReducer'

interface IAcardionItemProps {
	timeInterval: string
}

export default function AcardionItem({ timeInterval }: IAcardionItemProps) {
	const dispatch = useDispatch()
	return (
		<div
			className='statistics-acardion__item'
			onClick={() => {
				dispatch(setSelectedWeek(timeInterval))
			}}
		>
			<p className='statistics-acardion__text'>{timeInterval}</p>
		</div>
	)
}
