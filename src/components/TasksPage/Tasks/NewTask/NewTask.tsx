import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { addNewTask } from '../../../../redux/tasksReducer'
import { useDispatch } from 'react-redux'

const valid = Yup.object().shape({
	task: Yup.string()
		.min(2, 'Слишком короткая задача!')
		.max(35, 'введите меньше символов!')
		.required('Пустое поле ввода!'),
})

export function NewTask() {
	const dispatch = useDispatch()
	return (
		<Formik
			initialValues={{ task: '' }}
			validationSchema={valid}
			onSubmit={values => {
				dispatch(addNewTask(values.task))
				values.task = ''
			}}
		>
			{({ errors, touched }) => (
				<Form className='task-form'>
					<Field
						className={
							errors.task && touched.task
								? 'task-form__input task-form__input--error'
								: 'task-form__input '
						}
						type='text'
						name='task'
						placeholder='Название задачи'
					/>
					<ErrorMessage className='task-form__error' name='task' component='div' />
					<button
						className={
							errors.task && touched.task
								? 'btn task-form__btn task-form__btn--error'
								: 'btn task-form__btn'
						}
						type='submit'
						disabled={errors.task && touched.task ? true : false}
					>
						Добавить
					</button>
				</Form>
			)}
		</Formik>
	)
}
