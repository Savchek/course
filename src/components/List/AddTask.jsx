import React, { useState } from 'react'
import './List.css'
import cycle from '../../icons/cycle.svg'

const AddItem = ({ chosenDate, taskAdd, createId }) => {

	const [title, setTitle] = useState('')
	const [startTime, setStartTime] = useState('08:30:00')
	const [duration, setDuration] = useState('00:00:00')
	const [momental, setMomental] = useState(true)

	const updateTitle = e => setTitle(e.target.value)
	const updateStartTime = e => setStartTime(e.target.value)
	const updateDuration = e => setDuration(e.target.value)
	const switchMomental = () => setMomental(!momental)

	const processAddnig = e => {
		// Заборона перезавантаження сторінки
		e.preventDefault()

		if (chosenDate !== new Date().toISOString().slice(0, 10) && !momental) {
			alert('Задачі типу "з таймером" можна створювати лише в сьогоднішній даті')
			return
		}

		if (momental && duration === '00:00:00') {
			alert('Час не може бути нульовим')
			return
		}

		let t = title
		// Видалення всіх зайвих пропусків в заголовку
		t.trim()

		if (!t) {
			alert('Назва задачі не може бути пустою')
			return
		}

		const timeStyle = value => value.toString().length < 2 ? '0' + value : value

		let sTime = startTime
		let endTime = ''

		if (momental) {
			const parseTime = t => t.split(':').map(e => +e)

			const createDate = timeArr => {
				const parsedTimeArr = parseTime(timeArr)
				const sDate = new Date()
				sDate.setHours(parsedTimeArr[0] || 0)
				sDate.setMinutes(parsedTimeArr[1] || 0)
				sDate.setSeconds(parsedTimeArr[2] || 0)
				return sDate
			}

			// Створення об'єктів дати для спрощення обрахунків
			const startDate = createDate(startTime)
			const startDuration = createDate(duration)

			// (час початку) + (тривалість) 
			startDate.setHours(startDate.getHours() + startDuration.getHours())
			startDate.setMinutes(startDate.getMinutes() + startDuration.getMinutes())
			startDate.setSeconds(startDate.getSeconds() + startDuration.getSeconds())

			// Отримання числових значень кінцевого часу
			const h = timeStyle(startDate.getHours())
			const m = timeStyle(startDate.getMinutes())
			const s = timeStyle(startDate.getMinutes())

			endTime = h + ':' + m + ':' + s

		} else {
			const nDate = new Date()
			sTime = timeStyle(nDate.getHours()) + ':' +
				timeStyle(nDate.getMinutes()) + ':' +
				timeStyle(nDate.getSeconds())
		}

		const newTask = {
			id: createId(),
			title: t,
			date: chosenDate,
			startTime: sTime,
			endTime,
			duration,
			done: momental,
			type: momental ? 'momental' : 'withTimer'
		}

		taskAdd(newTask)

		setTitle('')
		setDuration('00:00:00')
		setStartTime('08:30:00')
	}


	return (
		<div className='addTask-wrap'>
			<form>
				<div className='task-create-type-choise'>
					<p>Тип створення задачі: </p>
					<p className='btn' onClick={switchMomental}>
						{momental ? 'моментальний' : 'з таймером'}
						<img src={cycle} alt='' />
					</p>
				</div>

				{
					// Показувати наступний блок тільки якщо тип задачі "моментальний"
					momental &&
					<div className='task-create-time'>
						<p>Початок: </p>
						<input type='time' value={startTime} onChange={updateStartTime} />
						<p>Тривалість: </p>
						<input type='time' value={duration} onChange={updateDuration} />
					</div>
				}

				<input
					type='text'
					className='task-create-title'
					value={title}
					onChange={updateTitle}
					placeholder='Назва задачі'
				/>

				<button className='task-create-btn' onClick={processAddnig}>Створити</button>

			</form>
		</div>
	)
}

export default AddItem

