import './EmployeeContainer.scss';
import Employee from "../components/Employee/Employee";
const EmployeeContainer = (props)=>{
    const {EmployeeArr} = props;
    
    const employeeDetails = EmployeeArr.map((employee,index)=>{
        console.log(employee);
        return (<div className="employee">
            <Employee key={employee.id} name = {employee.name} role = {employee.role} />
        </div>
        )
    })
    return <div className='grid-container'>{employeeDetails}</div>;
};
export default EmployeeContainer;