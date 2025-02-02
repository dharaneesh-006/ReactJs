// Using of Props in this page


// function Student(props){
//     return(
//         <div className="student">
//             <p>
//                 Name: {props.name}
//             </p>
//             <p>
//                 Rollno: {props.rollno}
//             </p>
//             <p>
//                 Age: {props.age}
//             </p>
//             <p>
//                 IsStudent: {props.isStudent ? "Yes" : "No"} 
//             </p>
//             {/* --- "{props.isStudent}" this do not return anything it do not return boolean directly..SO..use ternary Operator. to return... */}
//         </div>
//     )
// }

import propTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>
                Name: {props.name}
            </p>
            <p>
                Rollno: {props.rollno}
            </p>
            <p>
                Age: {props.age}
            </p>
            <p>
                IsStudent: {props.isStudent ? "Yes" : "No"} 
            </p>
        </div>
    )
}

Student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    rollno : propTypes.number,
    isStudent : propTypes.bool
}

//propsTypes = a mechanism that ensures that the passed value is  of correct datatype.  age: PropTypes.number
// It gives the error in the console , But it works even in error.  It helps in debugging..

//defaultProps >> it is used to set the default value. When the parent did not pass any value.. (Sets the default values when not available..)

Student.defaultProps = {
    name : "Default Name",
    age : 0,
    rollno : "XXXXXXX",
    isStudent : false
}



export default Student