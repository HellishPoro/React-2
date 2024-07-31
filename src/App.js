import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {

	let [activeIndex, setActiveIndex] = useState(0)

	const pressForwardButton = () => {
		if (activeIndex <= 7) {
			setActiveIndex(activeIndex + 1)
		}
	}

	const clickOnTheBackButton = () => {
		setActiveIndex(activeIndex - 1)
	}

	const startOverButton = () => {
		setActiveIndex(0)
	}

	const firstIndex = () => {
		return activeIndex === 0
	}

	const lastIndex = () => {
		return activeIndex === data.length - 1
	}

	const toGetActive = index => {
		setActiveIndex(index);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{data.map((step, index) => activeIndex === index ? step.content : '')}
					</div>
					<ul className={styles['steps-list']}>
						{data.map((step, index) =>
							<li className={styles['steps-item'] + (index === activeIndex ? ` ${styles.active}` : '') + (index < activeIndex ? ` ${styles.done}` : '')} key={step.id} >
								<button className={styles['steps-item-button']} onClick={() => toGetActive(index)}>{index + 1}</button>
								<p className={styles['steps-item'] + (index === activeIndex ? ` ${styles.active}` : '') + (index < activeIndex ? ` ${styles.done}` : '')}>{step.title}</p>
							</li>)}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={clickOnTheBackButton} disabled={firstIndex() ? true : false}>Назад</button>
						<button className={styles.button} onClick={lastIndex() ? startOverButton : pressForwardButton} >
							{lastIndex() ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
