import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/nodeservice';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  value: any
  items: any[] | undefined;
  slider: number = 50;
  selectedItem: any;
  colorPicker: any
  suggestions: any[] = [];
  pizza: string[] = [];
  checked: boolean = true;
  ingredient: any
  search(event: any) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
  cities!: any[];

  selectedCity!: any;
  nodes!: any[];

  selectedNodes: any;

  constructor(private nodeService: NodeService) {
    this.nodeService.getFiles().then((files) => (this.nodes = files));
  }
  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  paymentOptions: any[] = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
  ];
}
