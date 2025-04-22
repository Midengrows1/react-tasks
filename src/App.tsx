// import { useState } from 'react';
import s from './App.module.css';
import Instruction from './components/Instruction/Instruction';
// type TValue = string | null | undefined;
// interface IList {
//   id: number;
//   value: TValue;
// }
function App() {
  // const [value, setValue] = useState<TValue>('');
  // const [list, setList] = useState<IList[] | []>([]);
  // const [error, setError] = useState<string>('');
  // const [isValueVaild, setIsValueValid] = useState<boolean>(false);
  // const onInputButtonClick = () => {
  //   const requestValue: string | undefined | null = prompt('Введите значение');
  //   if (requestValue!.length < 3) {
  //     setError('Введенное значение должно содержать минимум 3 символа');
  //   } else {
  //     setValue(requestValue);
  //     setIsValueValid(true);
  //     setError('');
  //   }
  // };
  // const onAddButtonClick = () => {
  //   if (value!.length > 2) {
  //     setList((prevData) => [
  //       ...prevData,
  //       { id: prevData.length + 1, value: value },
  //     ]);
  //     setValue('');
  //     setIsValueValid(false);
  //   }
  // };
  // console.log(list);
  return (
    <div className={s.appContainer}>
      {/* <div className={s.app}>
        <h1 className={s['page-heading']}>Ввод значения</h1>
        <p className={s['no-margin-text']}>
          Текущее значение <code>value</code>: "
          <output className={s['current-value']}>{value}</output>"
        </p>
        {error !== '' && <div className={s.error}>{error}</div>}
        <div className={s['buttons-container']}>
          <button className={s.button} onClick={onInputButtonClick}>
            Ввести новое
          </button>
          <button
            className={s.button}
            disabled={!isValueVaild}
            onClick={onAddButtonClick}
          >
            Добавить в список
          </button>
        </div>
        <div className={s['list-container']}>
          <h2 className={s['list-heading']}>Список:</h2>
          <ul className={s.list}>
            {list.length !== 0 ? (
              list.map(({ id, value }) => (
                <li className={s['list-item']} key={id}>
                  {value}
                </li>
              ))
            ) : (
              <p className={s['no-margin-text']}>Нет добавленных элементов</p>
            )}
          </ul>
        </div>
      </div> */}
      <Instruction />
    </div>
  );
}

export default App;
