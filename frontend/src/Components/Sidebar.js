import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faPlusSquare, faAddressBook, faAtom, faTachometerAlt, faGlobe, faHome, faChalkboard, faAd, faChartBar, faCheckSquare, faRecycle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = ({ activemenu, submenu }) => {
  return (
    <ProSidebar breakPoint={'md'} >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 15,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          VESLOO HOLDINGS
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="round">

          <MenuItem
            active={activemenu === 'DASHBOARD'}
            icon={<FontAwesomeIcon icon={faHome} />}>
            Home<Link to="/" />
          </MenuItem>
          
          <SubMenu title="Employee" defaultOpen={activemenu === 'EMPLOYEE'} icon={<FontAwesomeIcon icon={faAtom} />}>
            <MenuItem active={submenu === 'EMPLOYEE_LIST'}>Manage Employees <Link to="/Employee/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_EMPLOYEE'}>Add Employee<Link to="/Employee/add" /></MenuItem>
            <MenuItem active={submenu === 'UPDATE_EMPLOYEE'}>Edit Employee<Link to="/Employee/update/:id" /></MenuItem>
            <MenuItem active={submenu === 'DELETE_EMPLOYEE'}>Delete Employee<Link to="/Employee/delete/:id" /></MenuItem>
            <MenuItem active={submenu === 'Basic_LIST'}>Employee Basic Salary Information<Link to="/Employee/blist" /></MenuItem>
            <MenuItem active={submenu === 'Attendance_EMPLOYEE'}>Employee Salary And Attendance Calculation<Link to="/Employee/att/:id"/></MenuItem>
            <MenuItem active={submenu === 'SALARY_LIST'}>Employee Salary Report <Link to="/Employee/salaryReport" /></MenuItem>
            <MenuItem active={submenu === 'ATTENDANCE_LIST'}>Employee Attendace Details <Link to="/Employee/attD" /></MenuItem>
            
          </SubMenu>

          <SubMenu title="Machine" defaultOpen={activemenu === 'MACHINE'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'MACHINE_LIST'}>Manage Machine <Link to="/Machine/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_MACHINE'}>Add Machine<Link to="/Machine/add" /></MenuItem>
          </SubMenu>

          <SubMenu title="Stock" defaultOpen={activemenu === 'STOCK'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'STOCK_LIST'}>Manage Stock</MenuItem>
            <MenuItem active={submenu === 'ADD_STOCK'}>Add Stock</MenuItem>
          </SubMenu>
          <SubMenu title="Supplier" defaultOpen={activemenu === 'SUP'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'SUPP_LIST'}>Manage Stock </MenuItem>
            <MenuItem active={submenu === 'ADD_SUPP'}>Add Stock</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    
    </ProSidebar>
  );
}

export default Sidebar;
