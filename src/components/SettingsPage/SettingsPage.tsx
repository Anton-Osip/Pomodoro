import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { Icon } from '../utils/Icon/Icon'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/rootReducer'
import { ISettingsState, setSettings } from '../../redux/tasksReducer'

const valid = Yup.object().shape({
	//
})

export function SettingsPage() {
	const settings = useSelector<IRootState, ISettingsState>(store => store.tasks.settings)
	const dispatch = useDispatch()
	const [soundState, setSoundState] = useState(settings.sound)
	const [nightState, setNightState] = useState(settings.nightThemes)

	return (
		<Formik
			initialValues={{
				workTime: settings.workTime / 60,
				longBreackTime: settings.longBreackTime / 60,
				shotBreackTime: settings.shotBreackTime / 60,
				frequencyOfLongBbreaks: settings.frequencyOfLongBbreaks,
				sound: settings.sound,
				nightThemes: settings.nightThemes,
			}}
			validationSchema={valid}
			onSubmit={values => {
				dispatch(
					setSettings({
						workTime: values.workTime,
						longBreackTime: values.longBreackTime,
						shotBreackTime: values.shotBreackTime,
						frequencyOfLongBbreaks: values.frequencyOfLongBbreaks,
						sound: values.sound,
						nightThemes: values.nightThemes,
					}),
				)
			}}
		>
			{({ errors, touched }) => (
				<Form className='settings-form'>
					<div className='settings-form__wrapper'>
						<div className='settings-form__part'>
							<span className='settings-form__description'>Продолжительность «помидора»</span>
							<Field className={'settings-form__input'} type='number' name='workTime' />
							<span className='settings-form__span-minuts'>мин</span>

							<ErrorMessage className='settings-form__error' name='workTime' component='div' />
						</div>
						<div className='settings-form__part'>
							<span className='settings-form__description'>Продолжительность короткого перерыва</span>
							<Field className={'settings-form__input'} type='number' name='shotBreackTime' />
							<span className='settings-form__span-minuts'>мин</span>

							<ErrorMessage className='settings-form__error' name='workTime' component='div' />
						</div>
						<div className='settings-form__part'>
							<span className='settings-form__description'>Продолжительность длинного перерыва</span>
							<Field className={'settings-form__input'} type='number' name='longBreackTime' />
							<span className='settings-form__span-minuts'>мин</span>

							<ErrorMessage className='settings-form__error' name='workTime' component='div' />
						</div>
						<div className='settings-form__part'>
							<span className='settings-form__description'>Частота длинных перерывов</span>
							<Field
								className={'settings-form__input settings-form__input--frequencyOfLongBbreaks'}
								type='number'
								name='frequencyOfLongBbreaks'
							/>

							<ErrorMessage className='settings-form__error' name='workTime' component='div' />
						</div>
						<div className='settings-form__part settings-form__part--center'>
							<Field id='sound' className={'settings-form__checkbox'} type='checkbox' name='sound' />
							<label
								htmlFor='sound'
								className='settings-form__label'
								onClick={() => setSoundState(!soundState)}
							>
								{soundState ? (
									<Icon name='SoundOn' color='#0D0D0D' />
								) : (
									<Icon name='SoundOff' color='#0D0D0D' />
								)}
							</label>
							<Field
								id='nightThemes'
								className={'settings-form__checkbox'}
								type='checkbox'
								name='nightThemes'
							/>
							<label
								htmlFor='nightThemes'
								className='settings-form__label'
								onClick={() => setNightState(!nightState)}
							>
								{nightState ? <Icon name='Night' color='#0D0D0D' /> : <Icon name='Sun' color='#0D0D0D' />}
							</label>
						</div>
						<button className={'btn settings-form__btn'} type='submit'>
							Изменить
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}
