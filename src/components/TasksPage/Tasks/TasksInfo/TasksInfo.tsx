import React from 'react'

export function TasksInfo() {
	return (
		<div className='task-info'>
			<h3 className='task-info__title'>Ура! Теперь можно начать работать:</h3>
			<ul className='task-info__list'>
				<li className='task-info__item'>Выберите категорию и напишите название текущей задачи</li>
				<li className='task-info__item'>Запустите таймер («помидор»)</li>
				<li className='task-info__item'> Работайте пока «помидор» не прозвонит</li>
				<li className='task-info__item'> Сделайте короткий перерыв (3-5 минут)</li>
				<li className='task-info__item'>
					Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые
					4 «помидора» делайте длинный перерыв (15-30 минут).
				</li>
			</ul>
		</div>
	)
}
