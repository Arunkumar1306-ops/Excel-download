import { Component } from '@angular/core';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExcelDownload';
  employees=[
    {"firstname":'Mark',"Lastname":'antony',"Age":'29',"Gender":'22'},
    {"firstname":'Mark',"Lastname":'antony',"Age":'29',"Gender":'22'},
    {"firstname":'Mark',"Lastname":'antony',"Age":'29',"Gender":'22'},
    {"firstname":'Mark',"Lastname":'antony',"Age":'29',"Gender":'22'},
    {"firstname":'Mark',"Lastname":'antony',"Age":'29',"Gender":'22'},
    {"firstname":'Mark',"Lastname":'antony',"Age":'29',"Gender":'22'},
    {"firstname":'Mark',"Lastname":'antony',"Age":'29',"Gender":'22'},
  ]



  filename="Excelsheet.xlsx";
 
 
//   downloadfile():void{ 

//      /* pass here the table id */
//     let element = document.getElementById('excel-table');
//     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

//     /* generate workbook and add the worksheet */
//     const wb: XLSX.WorkBook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

//     /* save to file */  
//     XLSX.writeFile(wb, this.filename);
//   }
}
