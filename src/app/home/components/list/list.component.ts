import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {
  data!: any[];
  sortedData!: any[];
  sortDirection!: string;
  filteredData!: any[];
  searchTerm: string ='';

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.dataService.getData().subscribe((data) => {
      this.data = data.data.list0 ;
      this.sortData();
    });
  }
  sortData() {
    this.sortedData = this.data.sort((a, b) =>
      this.sortDirection === 'asc'
        ?a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    this.filterData();
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortData();
  }


  filterData() {
    this.filteredData = this.sortedData.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.filterData();
  }
}
