import { Component, OnInit } from '@angular/core';
import * as detailsdata from '../details.json';
import * as XLSX from 'xlsx';
import { Details } from './Details';




@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrl: './excel.component.css'
})
export class ExcelComponent  {
  
  
  detail: Details[] = JSON.parse(JSON.stringify(detailsdata)).default;
  filename='Excelsheet.xlsx'
  tableHeaders:string[]=[];

  constructor(){
    if(this.detail.length>0){
      this.tableHeaders=Object.keys(this.detail[0]);
    }
  }
  

  downloadfile():void{ 
    console.log(typeof(detailsdata))
    console.log(this.detail)
    /* pass here the table id */
   let element = document.getElementById('excel-table');
   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

   /* generate workbook and add the worksheet */
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

   /* save to file */  
   XLSX.writeFile(wb, this.filename);
 }
}

