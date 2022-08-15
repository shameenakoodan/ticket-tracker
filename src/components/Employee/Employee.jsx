import Counter from "../Counter/Counter";
import "./Employee.scss";
const Employee =(props)=>{
    const {name,role} = props
    return(
        <div className="employee-details">
            
            <p><label>Name  :   </label>{name}</p>
            <p><label>Role  :   </label>{role}</p>
            <Counter />
        </div>
    );
};
export default Employee;