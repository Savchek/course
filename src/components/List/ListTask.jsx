import React, { useState, useEffect, useCallback, useRef } from 'react'
import cross from '../../icons/cross.svg'

const ListTask = ({ item, taskDelete, taskDone }) => {

	const [duration, setDuration] = useState('00:00:00')
	const taskTimer = useRef()

	// Лічильник активної задачі
	const progressDuration = useCallback(() => {
		const timeStyle = value => value.toString().length < 2 ? '0' + value : value
		const parsedStartTime = item.startTime.split(':').map(e => +e)

		const dateNow = new Date()

		dateNow.setHours(dateNow.getHours() - parsedStartTime[0])
		dateNow.setMinutes(dateNow.getMinutes() - parsedStartTime[1])
		dateNow.setSeconds(dateNow.getSeconds() - (parsedStartTime[2] - 1))

		const h = timeStyle(dateNow.getHours())
		const m = timeStyle(dateNow.getMinutes())
		const s = timeStyle(dateNow.getSeconds())

		setDuration(h + ':' + m + ':' + s)
	}, [item])


	useEffect(() => {
		if (!item.done) {
			progressDuration()
			// Встановлення лічильника
			const id = setInterval(progressDuration, 1000)
			taskTimer.current = id
		}
		return () => {
			clearInterval(taskTimer.current)
		}

	}, [item, progressDuration])

	const completeTask = () => {
		setDuration('00:00:00')
		clearInterval(taskTimer.current)
		taskDone(item.id, duration)
	}

	// Форматування часу
	const formatTime = t => t.substring(0, 5) === '00:00' ? t : t.substring(0, 5)


	return (
		<li className='task-list-item'>
			<div className='task-title'>
				<p>{item.title}</p>
			</div>
			<div className='task-info'>
				<div className='task-info-item'><p>Початок:</p><p>{formatTime(item.startTime)}</p></div>

				{item.done && <div className='task-info-item'>
					<p>Закінчення:</p>
					<p>{formatTime(item.endTime)}</p>
				</div>}

				{item.done && <div className='task-info-item'>
					<p>Тривалість:</p>
					<p>{formatTime(item.duration)}</p>
				</div>}

				{!item.done && <p className='task-duration'>{duration}</p>}

			</div>

			<div className='task-delete'>
				{
					// Показувати кнопку "Видалити" можна тільки якщо завдання виконано
					item.done ? <button className='delete-task' onClick={() => taskDelete(item.id)}><img src={cross} alt='' /></button>
						: <button onClick={completeTask}>Виконано</button>
				}
			</div>

		</li>
	)
}

export default ListTask
