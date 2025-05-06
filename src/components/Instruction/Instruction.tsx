import { useState } from 'react';
import styles from './instraction.module.css';
import data from '../data.json';
const Instruction = () => {
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const firstStep = activeIndex === 0;
  const lastStep = activeIndex === steps.length - 1;
  const goToNext = () => {
    if (activeIndex === steps.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {steps[activeIndex]['content']}
          </div>
          <ul className={styles['steps-list']}>
            {steps.map((step, index) => {
              return (
                <li
                  key={step.id}
                  className={`${styles['steps-item']}  ${
                    activeIndex === index ? `${styles.active}` : ''
                  } ${index < activeIndex ? styles.done : ''}`}
                >
                  <button
                    className={styles['steps-item-button']}
                    onClick={() => setActiveIndex(index + 1)}
                  >
                    {index + 1}
                  </button>
                  {step.title}
                </li>
              );
            })}
          </ul>
          <div className={styles['buttons-container']}>
            <button
              className={styles.button}
              disabled={firstStep}
              onClick={goToPrev}
            >
              Назад
            </button>
            <button className={styles.button} onClick={goToNext}>
              {lastStep ? 'Начать с начала' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
