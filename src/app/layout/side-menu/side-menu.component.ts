import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  model: any[] = [];
  isOpen: boolean = true;
  ngOnInit() {
    this.model = [
      {
        label: 'DASHBOARDS',
        items: [
          { label: 'E-commerce', icon: 'pi pi-fw pi-home' },
          { label: 'Banking', icon: 'pi pi-fw pi-image' },
        ]
      },
      {
        label: 'APPS',
        items: [
          {
            label: 'Blog',
            icon: 'pi pi-fw pi-comment',
            items: [
              {
                label: 'List',
                icon: 'pi pi-fw pi-image',
              },
              {
                label: 'Detail',
                icon: 'pi pi-fw pi-list',
              },
              {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
              }
            ]
          },
          { label: 'Chat', icon: 'pi pi-fw pi-comments' },
          { label: 'File', icon: 'pi pi-fw pi-folder' },
          { label: 'Khanban', icon: 'pi pi-fw pi-sliders-v' },
          {
            label: 'Mail',
            icon: 'pi pi-fw pi-envelope',
            items: [
              {
                label: 'Inbox',
                icon: 'pi pi-fw pi-inbox',
              },
              {
                label: 'Compose',
                icon: 'pi pi-fw pi-pencil',
              },
              {
                label: 'Detail',
                icon: 'pi pi-fw pi-comment',
              }
            ]
          },
          { label: 'Task List', icon: 'pi pi-fw pi-check-square' },
        ]
      },
      {
        label: 'UI KIT',
        items: [
          { label: 'Form Layout', icon: 'pi pi-fw pi-id-card' },
          { label: 'Input', icon: 'pi pi-fw pi-check-square' },
          { label: 'Button', icon: 'pi pi-fw pi-box' },
          { label: 'Table', icon: 'pi pi-fw pi-table' },
          { label: 'List', icon: 'pi pi-fw pi-list' },
          { label: 'Tre', icon: 'pi pi-fw pi-share-alt' },
          { label: 'Panel', icon: 'pi pi-fw pi-tablet' },
          { label: 'Overlay', icon: 'pi pi-fw pi-clone' },
          { label: 'Media', icon: 'pi pi-fw pi-image' },
          { label: 'Menu', icon: 'pi pi-fw pi-bars' },
          { label: 'Message', icon: 'pi pi-fw pi-comment' },
          { label: 'File', icon: 'pi pi-fw pi-file' },
          { label: 'Chart', icon: 'pi pi-fw pi-chart-bar' },
          { label: 'Misc', icon: 'pi pi-fw pi-circle-off' },
        ]
      },
      {
        label: 'Prime Blocks',
        items: [
          { label: 'Free Blocks', icon: 'pi pi-fw pi-eye' },
          { label: 'All Blocks', icon: 'pi pi-fw pi-globe' },
        ]
      },
      {
        label: 'Utilities',
        items: [
          {
            label: 'Figma',
            icon: 'pi pi-fw pi-pencil',
          },
        ]
      },
      {
        label: 'PAGES',
        items: [
          { label: 'Landing', icon: 'pi pi-fw pi-globe' },
          {
            label: 'Auth', icon: 'pi pi-fw pi-user',
            items: [
              { label: 'Login', icon: 'pi pi-fw pi-sign-in' },
              { label: 'Error', icon: 'pi pi-fw pi-times-circle' },
              { label: 'Access Denied', icon: 'pi pi-fw pi-lock' },
              { label: 'Register', icon: 'pi pi-fw pi-user-plus' },
              { label: 'Forgot Password', icon: 'pi pi-fw pi-question' },
              { label: 'New Password', icon: 'pi pi-fw pi-cog' },
              { label: 'Verification', icon: 'pi pi-fw pi-envelope' },
              { label: 'Lock Screen', icon: 'pi pi-fw pi-eye-slash' },
            ]
          },
          { label: 'Curd', icon: 'pi pi-fw pi-pencil' },
          { label: 'Invoice', icon: 'pi pi-fw pi-dollar' },
          { label: 'About Us', icon: 'pi pi-fw pi-user' },
          { label: 'Help', icon: 'pi pi-fw pi-question-circle' },
          { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle' },
          { label: 'Empty', icon: 'pi pi-fw pi-circle-off' },
          { label: 'FAQ', icon: 'pi pi-fw pi-question' },
          { label: 'Contact Us', icon: 'pi pi-fw pi-phone' },
        ]
      },
      {
        label: 'E-COMMERCE',
        items: [
          { label: 'Product Overview', icon: 'pi pi-fw pi-image' },
          { label: 'Product List', icon: 'pi pi-fw pi-list' },
          { label: 'New Product', icon: 'pi pi-fw pi-plus' },
          { label: 'Shopping Cart', icon: 'pi pi-fw pi-shopping-cart' },
          { label: 'Checkout Form', icon: 'pi pi-fw pi-check-square' },
          { label: 'Order History', icon: 'pi pi-fw pi-history' },
          { label: 'Order Summary', icon: 'pi pi-fw pi-file' },
        ]
      },
      {
        label: 'USER MANAGEMENT',
        items: [
          { label: 'List', icon: 'pi pi-fw pi-list' },
          { label: 'Create', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'START',
        items: [
          { label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart' },
          { label: 'Doccumentation', icon: 'pi pi-fw pi-info-circle' },
        ]
      },
    ];
  }
}
