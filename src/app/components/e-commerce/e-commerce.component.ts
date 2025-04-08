import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.scss'
})
export class ECommerceComponent {
  options: any;
  data: any;
  value: number = 67;
  dataCircleChart: any;
  times: any
  optionsCircleChart: any;
  selectedCity: any = "This Week";
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: documentStyle.getPropertyValue('--indigo-500'),
          borderColor: documentStyle.getPropertyValue('--indigo-500'),
          data: [65, 59, 80, 81, 56, 55, 40],
          barThickness: 10,
          borderRadius: 10
        },
        {
          label: 'Profit',
          backgroundColor: documentStyle.getPropertyValue('--indigo-200'),
          borderColor: documentStyle.getPropertyValue('--indigo-200'),
          data: [28, 48, 40, 19, 86, 27, 90],
          barThickness: 10,
          borderRadius: 10
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            color: textColor,
            font: {
              weight: 'bold',
              size: 14
            },
            padding: 30
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }

      }
    };
    this.times = [
      { name: 'This Week', code: 'TW' },
      { name: 'Last Week', code: 'LW' },
    ];
    const documentStyleCircle = getComputedStyle(document.documentElement);
    const textColorCircler = documentStyle.getPropertyValue('--text-color');

    this.dataCircleChart = {
      labels: ['Electronics', 'Fashion', 'Household'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyleCircle.getPropertyValue('--indigo-500'), documentStyleCircle.getPropertyValue('--indigo-700'), documentStyleCircle.getPropertyValue('--indigo-300')],
          hoverBackgroundColor: [documentStyleCircle.getPropertyValue('--indigo-500'), documentStyleCircle.getPropertyValue('--indigo-700'), documentStyleCircle.getPropertyValue('--indigo-300')]
        }
      ]
    };

    this.optionsCircleChart = {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            color: textColorCircler,
            font: {
              weight: 'bold',
              size: 14
            },
            padding: 30
          }
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      }
    };

  }
}
