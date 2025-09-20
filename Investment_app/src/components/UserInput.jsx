import React from 'react'

export default function UserInput({ onChange, userInput }) {



    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input id="initialInvestment" type='number' required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input id="expectedReturn" type='number' required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input id="annualInvestment" type='number' required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input id="duration" type='number' required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}
