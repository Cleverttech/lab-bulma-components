import React from 'react'

class CoolButton extends React.Component{

    render(){
        const {isSmall, isDanger , isSuccess, isInfo, isPrimary,isRounded, className} = this.props

        let buttonClass = ""

        if(className){
            buttonClass = buttonClass + className + " "
            }
           if(isSmall){
            buttonClass =buttonClass+ "is-small"
            }
            if(isDanger){
                buttonClass = buttonClass + "is-rounded is-danger"
            }
            if(isSuccess){
                buttonClass = buttonClass + "is-success"
            }
            if(isInfo){
                buttonClass = buttonClass + "is-rounded is-info"
            }
        
            if(isPrimary){
                buttonClass = buttonClass + "is-primary"
            }
    
        return <button className={`button ${buttonClass}`}>{this.props.children}</button>
    }
}
export default CoolButton