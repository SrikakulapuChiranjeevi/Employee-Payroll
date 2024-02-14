import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeArray: any[] = [];
  employeeObj: any;

  constructor(private empSrv: EmployeeService) {
    this.resetObj();
  }

  resetObj() {
    this.employeeObj = {
      empId: 0,
      empName: '',
      empContactNo: '',
      empAltContactNo: '',
      empEmail: '',
      addressLine1: '',
      addressLine2: '',
      pincode: '',
      city: '',
      state: '',
      bankName: '',
      iFSC: '',
      accountNo: '',
      bankBranch: '',
      salary: 0,
    };
  }
  ngOnInit(): void {
    this.loadAllEmployee();
  }
  loadAllEmployee() {
    this.empSrv.getAllEmployee().subscribe((res: any) => {
      this.employeeArray = res.data;
      console.log(this.employeeArray);
    });
  }
  // onSave() {

  //   this.empSrv.createEmployee(this.employeeObj).subscribe((res: any) => {

  //     if (res.result) {
  //       this.loadAllEmployee();
  //       alert(res.massege);
  //       this.resetObj();
  //     } else {
  //       alert(res.massege);
  //     }
  //   });
  // }
  // onEdit(id: number) {
  //   this.empSrv.getEmpById(id).subscribe((res: any) => {

  //     this.employeeObj = res.data;
  //   })
  // }
  // onUpdate(){

  //   this.empSrv.updateEmployee(this.employeeObj).subscribe((res: any) => {

  //     if (res.result) {
  //       this.loadAllEmployee();
  //       alert(res.massege);
  //       this.resetObj();
  //     } else {
  //       alert(res.massege);
  //     }
  //   });
  // }
  // onDelete(empId:number) {
  //   this.empSrv.deleteEmpById(empId).subscribe((res: any) => {

  //     if (res.result) {
  //       this.loadAllEmployee();
  //       alert(res.massege);

  //     } else {
  //       alert(res.massege);
  //     }
  //   });
  // }
}
