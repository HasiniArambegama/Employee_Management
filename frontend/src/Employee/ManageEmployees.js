import React, {useState, useEffect} from "react";
import axios from "axios";
import UpdateEmployee from './EditEmployee'
import Sidebar from '../Components/Sidebar'
import { Link } from "react-router-dom";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';



function ManageEmployees(){

    const [employees, setEmployees] = useState([]);
    let content = null
    
    useEffect(()=>{
        function getEmployees(){
            axios.get("http://localhost:8070/Employee").then((res)=>{
                setEmployees(res.data);   
            }).catch((err)=> {
                alert(err.message);
            })
        }
        getEmployees();
    },[])
    
    /*let search = null
    search = (e) => {
        this.setState({
            search : e.target.value
        })
    }
    let renderTable = null
    renderTable = () => {
        const {manageemployees , search} = this.state;
        var filtered = manageemployees;
    
        if( search.length > 0 ){
            filtered = manageemployees.filter( item => item.firstName.toLowerCase().includes(search.toLowerCase() ))
        }*/
 
    return(
        <div className="app" >
        <Sidebar activemenu={'EMPLOYEE'} submenu={'EMPLOYEE_LIST'} />

        <><div>
            
            <br></br>
            <div>{content}</div>
            
            
        </div><main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h2 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Employee List</h2>
                
                <div className="col-12 shadow-sm rounded bg-white mt-3" >
                <div class="form-outline mb-4">
                <label class="form-label" for="datatable-search-input">Search</label>
                <input type="search" class="form-control" id="datatable-search-input" placeholder="Search here..." onChange={(e)=> (e.target.value)}/>
                
                </div>
                <div id="datatable">
                </div>
                <table class="table borderless customtable" id="machine-table">
                    <thead>
                        <tr>
                        <th className="font-08 text-dark2 ">FirstName</th>
                        <th className="font-08 text-dark2 ">LastName</th>
                        <th className="font-08 text-dark2 ">PhoneNumber</th>
                        <th className="font-08 text-dark2 ">NIC</th>
	                    <th className="font-08 text-dark2 ">E-mail</th>
	                    <th className="font-08 text-dark2 ">Address</th>
	                    <th className="font-08 text-dark2 ">Acc_No</th>
	                    <th className="font-08 text-dark2 ">EmpType</th>
                        <th className="font-08 text-dark2 ">Actions</th>
	                    
                        </tr>
                    </thead>
                    <tbody >
                        {employees.map((item)=>
                    <tr key={item._id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.empNIC}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.accountNumber}</td>
                    <td>{item.empType}</td>
                    <td><span className="btn rounded-0 btn-warning margin-left"><Link style={{ textDecoration: 'none', color: '#FFF'}} to={`/Employee/update/${item._id}`}>Edit</Link></span></td>
                    <td><span className="btn rounded-0 btn-danger margin-left"> <Link style={{ textDecoration: 'none', color: '#FFF'}} to={`/Employee/delete/${item._id}`}>Delete</Link></span></td>
                    <td><span className="btn rounded-0 btn-success margin-left"> <Link style={{ textDecoration: 'none', color: '#FFF'}} to={`/Employee/att/${item._id}`}>Calc</Link></span></td>
                    </tr>
	)}

                    </tbody>
                </table>
                
            </div>
            </div>
        </div>
        </div>
    </main>
    </>
</div>
    )
}

export default ManageEmployees;