import React from 'react'

export default function Step(props) {
  return (
    <div>
        <div>

            {/* <!-- Variables --> */}
            <h2>Step {this.props.currentStep}</h2>
            <p>Total Steps: {this.props.totalSteps}</p>
            <p>Is Active: {this.props.isActive}</p>
            {/* <!-- Functions --> */}
            <p><button onClick={this.props.previousStep}>Previous Step</button></p>
            <p><button onClick={this.props.nextStep}>Next Step</button></p>
            <p><button onClick={()=>this.props.goToStep(2)}>Step 2</button></p>
            <p><button onClick={this.props.firstStep}>First Step</button></p>
            <p><button onClick={this.props.lastStep}>Last Step</button></p>
        </div>
    </div>
  )
}