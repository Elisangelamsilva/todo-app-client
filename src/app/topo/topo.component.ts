import { Component, OnInit } from '@angular/core';

// metadado que é encaminhado para o component
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html', // recurso visual 
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
