import React, { useState, useEffect } from 'react'
import ListItem from './ListTasks'
import AddTask from './AddTask'

const List = ({ tasks, setTasks, chosenDate }) => {
	const [taskInProcess, setTaskInProcess] = useState('')

	useEffect(() => {
		// Отримання даних с локального сховища браузера
		const pullTasks = async () => {
			const localTasks = localStorage.getItem('workTasks')
			if (localTasks) {
				const parsedTasks = await JSON.parse(localTasks)
				setTasks(parsedTasks)
				parsedTasks.forEach(e => {
					if (!e.done) setTaskInProcess(e.id)
				})
			}
		}

		pullTasks()

	}, [setTasks])

	const createId = () => {
		let id = Math.random().toString().replace('.', '')
		// Перевірка щоб впевнитись що створений id не співпадав з уже існуючими
		if (tasks.find(e => e.id === id))
			createId()
		else return id
	}

	const tasksSave = newTasks => {
		setTasks(newTasks)
		const stringList = JSON.stringify(newTasks)
		localStorage.setItem('workTasks', stringList)
	}

	const taskAdd = newItem => {
		if (!newItem.done) setTaskInProcess(newItem.id)
		const newTasks = [newItem, ...tasks]
		tasksSave(newTasks)
	}

	const taskDelete = id => {
		// Створення нового списку без видаленого елементу
		const filteredList = tasks.filter(e => e.id !== id)
		tasksSave(filteredList)
	}

	const taskDone = (id, duration) => {
		let endTime = new Date()

		const timeStyle = value => value.toString().length < 2 ? '0' + value : value

		let h = timeStyle(endTime.getHours())
		let m = timeStyle(endTime.getMinutes())
		let s = timeStyle(endTime.getSeconds())

		const newTasks = tasks.map(e =>
			e.id === id ?
				{
					...e,
					duration,
					done: true,
					endTime: h + ':' + m + ':' + s
				} : e
		)

		setTaskInProcess('')
		tasksSave(newTasks)
	}

	// Список задач для відображення
	const tasksList = () => {
		const upToDateTasks = tasks.filter(e => e.date === chosenDate)
		return upToDateTasks.length > 0 ? (
			<ul className='task-list'>
				{upToDateTasks.map(e => (
					<ListItem
						key={e.id}
						item={e}
						taskDelete={taskDelete}
						taskDone={taskDone}
					/>
				))}
			</ul>
		) : <h1>Порожньо</h1>
	}

	return (
		<div className='task-list-wrap'>
			{
				(taskInProcess === '') && <AddTask chosenDate={chosenDate} taskAdd={taskAdd} createId={createId} />
			}

			{tasksList()}
		</div>
	)
}

export default List
