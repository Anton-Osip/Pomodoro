import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { editName } from '../../../../../../../../redux/tasksReducer'

interface IEditNameProps {
	id: string
	name: string
}

const valid = Yup.object().shape({
	task: Yup.string()
		.min(2, 'Слишком короткая задача!')
		.max(35, 'введите меньше символов!')
		.required('Пустое поле ввода!'),
})

export function EditName({ id }: IEditNameProps) {
	const dispatch = useDispatch()
	return (
		<Formik
			initialValues={{ task: '' }}
			validationSchema={valid}
			onSubmit={values => {
				dispatch(editName({ id, name: values.task }))
				values.task = ''
			}}
		>
			{({ errors, touched }) => (
				<Form className='edit-task-form'>
					<Field
						className={
							errors.task && touched.task
								? 'edit-task-form__input edit-task-form__input--error'
								: 'edit-task-form__input '
						}
						type='text'
						name='task'
						placeholder='Изменить задачу'
					/>
					<ErrorMessage className='edit-task-form__error' name='task' component='div' />
				</Form>
			)}
		</Formik>
	)
}
