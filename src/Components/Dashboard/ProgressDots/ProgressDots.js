import React from 'react';
import './ProgressDots.css'
import  data_progress from './data_progress.json'

function ProgressDots() {
  return (
    <div>
    <p className="xs-l-gray">YOUR 12 WEEK PROGRESS</p>
    <div className="ProgressDots__items">
    { data_progress.data.map(dot =>  <div className="ProgressDots__item" key={dot.weekNumber}>
                                        <div className={ dot.done ? "ProgressDots__item--past" : "ProgressDots__item--feature"}></div>
                                        { dot.current && <div className="ProgressDots__item--current"></div> }
                                        <div className={ dot.done ? "ProgressDots__item-line--past" : "ProgressDots__item-line--feature"}></div>
                                        <p className="xs-l-gray">{dot.weekNumber}</p>
                                      </div> 
                                      
                              )
      }
    </div>
    </div>
  );
}

export default ProgressDots;
