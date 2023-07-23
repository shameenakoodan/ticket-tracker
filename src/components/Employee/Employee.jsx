import Counter from "../Counter/Counter";
import "./Employee.scss";
const Employee =(props)=>{
    const {name,role} = props
    let isDisabled = false;
    const handleClick =(event)=>{
        if (!isDisabled) {
            isDisabled = true;
          }
    }
    return(
        <div className="employee-details" >
            
            <p><label>Name  :   </label>{name}</p>
            <p><label>Role  :   </label>{role}</p>
            <Counter />
            <button onClick={handleClick} >Submit</button>
        </div>
    );
};
export default Employee;