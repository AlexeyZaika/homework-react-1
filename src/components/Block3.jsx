import React from 'react';
import today from '../img/today.png';
import tomorrow from '../img/tomorrow.png';
import aftertomorrow from '../img/aftertomorrow.png';

const toDoList = [
  {id: "1", case: "complete for today №1", performance: true, day: "today"},
  {id: "2", case: "complete for today №2", performance: true, day: "today"},
  {id: "3", case: "complete for today №3", performance: true, day: "today"},
  {id: "4", case: "execute for tomorrow №1", performance: false, day: "tomorrow"},
  {id: "5", case: "execute for tomorrow №2", performance: false, day: "tomorrow"},
  {id: "6", case: "execute for tomorrow №3", performance: false, day: "tomorrow"},
  {id: "7", case: "execute for tomorrow №4", performance: false, day: "tomorrow"},
  {id: "8", case: "perform on the day after tomorrow №1", performance: false, day: "after tomorrow"},
  {id: "9", case: "perform on the day after tomorrow №2", performance: false, day: "after tomorrow"},
  {id: "10", case: "perform on the day after tomorrow №3", performance: false, day: "after tomorrow"}
]

function Block3() {
  return (
    <div className="block3">
      <ul>
        {
          toDoList.map( listItem =>  {
            return (
              <li key={listItem.id} className={listItem.performance ? 'complete' : ''}>
                <img src={ listItem.day == 'today' ? today : listItem.day == 'tomorrow' ? tomorrow : aftertomorrow } />
                <span>{listItem.case}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
    
  );
}

export default Block3;

