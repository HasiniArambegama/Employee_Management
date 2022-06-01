import Dashboard from '../Dashboard';
import AddMachine from '../Machine/AddMachine';
import MachineList from '../Machine/MachineList';
import DeleteMachine from '../Machine/DeleteMachine';
import EditMachine   from '../Machine/EditMachine';
import AddEmployee from '../Employee/AddEmployee';
import ManageEmployee from '../Employee/ManageEmployees';
import EditEmployee from '../Employee/EditEmployee';
import AddAttendance from '../Employee/AddAttendance';
import DeleteEmployee from '../Employee/DeleteEmployee';
import BasicInformation from '../Employee/BasicInformation';
import SalaryReport from '../Employee/SalaryReport';
import AttendanceDetails from '../Employee/AttendanceDetails'


let routes = [

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },

  {
    path: "/Machine/list",
    name: "Machine",
    component: MachineList,
    exact: true,
  },

  {
    path: "/Machine/add",
    name: "Add Machine",
    component: AddMachine,
    exact: true,
  },

  {
    path: "/Machine/delete/:id",
    name: "Delete Machine",
    component: DeleteMachine,
    exact: true,
  },
  
  {
    path: "/Machine/edit/:id",
    name: "Edit Machine",
    component: EditMachine,
    exact: true,
  },

  {
    path: "/Employee/add",
    name: "Add Employee",
    component: AddEmployee,
    exact: true,
  },

  {
    path: "/Employee/list",
    name: "Manage Employee",
    component: ManageEmployee,
    exact: true,
  },

  {
    path: "/Employee/update/:id",
    name: "Edit Employee",
    component: EditEmployee,
    exact: true,
  },

  {
    path: "/Employee/att/:id",
    name: "Add Attendance",
    component: AddAttendance,
    exact: true,
  },

  
  {
    path: "/Employee/delete/:id",
    name: "Delete Employee",
    component: DeleteEmployee,
    exact: true,
  },

  {
    path: "/Employee/blist",
    name: "Employee Basic Information",
    component: BasicInformation,
    exact: true,
  },

  {
    path: "/Employee/salaryreport",
    name: "Employee Salary Details",
    component: SalaryReport,
    exact: true,
  },

  {
    path: "/Employee/attD",
    name: "Employee Attendace Details",
    component: AttendanceDetails,
    exact: true,
  },

  
 
  
 
];

export default routes;
