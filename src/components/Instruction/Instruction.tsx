import { useEffect, useState } from 'react';
import styles from './instraction.module.css';
import data from '../data.json';
const Instruction = () => {
  console.log(data);
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [firstStep, setFirstStep] = useState<boolean>(true);
  const [lastStep, setLastStep] = useState<boolean>(false);
  const goToNext = () => {
    if (activeIndex === 7) {
      setActiveIndex(1);
    } else {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    switch (activeIndex) {
      case 1:
        setFirstStep(true);
        break;
      case 7:
        setLastStep(true);
        break;
      default:
        setFirstStep(false);
        setLastStep(false);
    }
  }, [activeIndex]);
  const goToPrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {steps[activeIndex - 1]['content']}
          </div>
          <ul className={styles['steps-list']}>
            {steps.map((step, index) => {
              return (
                <li
                  key={step.id}
                  className={`${styles['steps-item']}  ${
                    activeIndex === index + 1 ? `${styles.active}` : ''
                  } ${index < activeIndex && styles.done}`}
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
