import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss'
})
export class BankingComponent {
  products!: any;
  items: any;
  constructor(private productService: ProductService) {
    this.productService.getProductsMini().then((data) => (this.products = data));
    this.items = [{
      img: 'https://apollo.primeng.org/demo/images/banking/airbnb.png',
      label: 'Airbnb',
      date: '05/23/2022',
      price: '250'
    },
    {
      img: 'https://apollo.primeng.org/demo/images/banking/amazon.png',
      label: 'Amazon',
      date: '05/23/2022',
      price: '50'
    },
    {
      img: 'https://apollo.primeng.org/demo/images/banking/nike.svg',
      label: 'Nike Store',
      date: '04/12/2022',
      price: '60'
    },
    {
      img: 'https://apollo.primeng.org/demo/images/banking/starbucks.svg',
      label: 'Starbucks',
      date: '05/23/2022',
      price: '15.24'
    },
    {
      img: 'https://apollo.primeng.org/demo/images/banking/airbnb.png',
      label: 'Amazon',
      date: '05/23/2022',
      price: '12.50'
    },
    ]
  }
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Income',
          data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--green-500')
        },
        {
          label: 'Expenses',
          data: [1200, 5100, 6200, 3300, 2100, 6200, 4500],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--purple-500'),
          tension: 0.4,
          backgroundColor: '#e0e0f8'
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
}
