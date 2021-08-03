import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://i.pinimg.com/564x/10/d5/bb/10d5bb751a04d89562143801d62bcffa.jpg)'

            }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    reflfvel frpflflrk frklfkelrfkerlñf kfelkñfkefelrkf kfñrlkf
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
