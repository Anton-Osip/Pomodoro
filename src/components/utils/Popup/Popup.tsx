import React from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '../../utils/Icon/Icon'
import { useDispatch } from 'react-redux'
import { closePopup, deleteTask } from '../../../redux/tasksReducer'
import uuid from 'react-uuid'

interface IPopupProps {
	id: string
	state: string
	nightThemes: boolean
}

export function Popup({ id, state, nightThemes }: IPopupProps) {
	const dispatch = useDispatch()

	const node = document.querySelector('#popap_root')
	if (!node) return null

	return createPortal(
		<div className={`popap ${state}`} key={uuid()}>
			<div className='popap__wrapper'>
				<div className='popap__inner'>
					<div className={nightThemes ? `popap__content ${state} night` : `popap__content ${state}`}>
						<button
							className='popap__clouse'
							onClick={() => {
								dispatch(closePopup(id))
							}}
						>
							<Icon name={'ClouseIcon'} size={24} />
						</button>
						<h3 className='popap__title'>Удалить задачу?</h3>
						<button
							className='btn popap__btn'
							onClick={() => {
								dispatch(deleteTask(id))
							}}
						>
							Удалить
						</button>
						<button
							className='popap__link'
							onClick={() => {
								dispatch(closePopup(id))
							}}
						>
							Отмена
						</button>
					</div>
				</div>
			</div>
		</div>,
		node,
	)
}
