import UserGreeting from "./UserGreeting"


function App() {
    return(
      <>
        <UserGreeting isLoggedin={true} username="Neonstar"/>
        <br />
        <UserGreeting isLoggedin={false} username="Neonstar"/>
        <br />
        <UserGreeting isLoggedin={true}/>
      </>    
    )
}

export default App


{/* //props = read-only properties that are   shared between components.
// A parent component can sent data to a child component.
//      <Component key=value />

<> >>> Props <<<
        <Student name="Neonstar" rollno="214" age={19} isStudent={true}/>
        <Student name="Moon" rollno="211" age={19} isStudent={true}/>
        <Student />

        {/* ---Sending the values using the name that we kept.
        ---If we give the numbers,boolean we should enclose it with curly braces..or.. it is an error.
</>
*/}

{
  /*
    Conditional Rendering -- Allows you to control what gets rendered in your application based on certain conditions..
    (show, hide, or change components)
  */
}