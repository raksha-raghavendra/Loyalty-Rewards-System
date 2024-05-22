import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  items = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise-cancellation and long battery life.',
      image: 'assets/images/wireless-headphones.jpg',
      price: '$99.99'
    },
    {
      name: 'Smartwatch',
      description: 'Stylish smartwatch with fitness tracking and heart rate monitoring.',
      image: 'assets/images/smartwatch.jpg',
      price: '$149.99'
    },
    {
      name: 'Portable Bluetooth Speaker',
      description: 'Compact and powerful Bluetooth speaker with excellent sound quality.',
      image: 'assets/images/bluetooth-speaker.jpg',
      price: '$79.99'
    },
    {
      name: 'E-Reader',
      description: 'Lightweight e-reader with a high-resolution display and adjustable lighting.',
      image: 'assets/images/ereader.jpg',
      price: '$129.99'
    },
    {
      name: 'Fitness Tracker',
      description: 'Advanced fitness tracker with multiple sports modes and sleep tracking.',
      image: 'assets/images/fitness-tracker.jpg',
      price: '$59.99'
    },
    {
      name: 'Smart Home Assistant',
      description: 'Voice-controlled smart home assistant with AI capabilities.',
      image: 'assets/images/home-assistant.jpg',
      price: '$89.99'
    },
    {
      name: 'Laptop Backpack',
      description: 'Durable and spacious laptop backpack with multiple compartments.',
      image: 'assets/images/laptop-backpack.jpg',
      price: '$69.99'
    },
    {
      name: 'Wireless Charger',
      description: 'Fast and convenient wireless charger compatible with various devices.',
      image: 'assets/images/wireless-charger.jpg',
      price: '$29.99'
    },
    {
      name: 'Noise-Canceling Earbuds',
      description: 'Compact noise-canceling earbuds with high-quality sound and long battery life.',
      image: 'assets/images/earbuds.jpg',
      price: '$49.99'
    },
    {
      name: 'Action Camera',
      description: 'Waterproof action camera with 4K video recording and image stabilization.',
      image: 'assets/images/action-camera.jpg',
      price: '$199.99'
    },
    {
      name: 'Digital Photo Frame',
      description: 'Wi-Fi enabled digital photo frame with a high-resolution display.',
      image: 'assets/images/photo-frame.jpg',
      price: '$79.99'
    },
    {
      name: 'Electric Toothbrush',
      description: 'Smart electric toothbrush with multiple brushing modes and a long-lasting battery.',
      image: 'assets/images/toothbrush.jpg',
      price: '$39.99'
    },
    {
      name: 'Portable Power Bank',
      description: 'High-capacity portable power bank with fast charging capabilities.',
      image: 'assets/images/power-bank.jpg',
      price: '$24.99'
    },
    {
      name: 'Smart Thermostat',
      description: 'Energy-saving smart thermostat with remote control via mobile app.',
      image: 'assets/images/thermostat.jpg',
      price: '$129.99'
    },
    {
      name: 'Gaming Mouse',
      description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
      image: 'assets/images/gaming-mouse.jpg',
      price: '$49.99'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  buyItem(item: any) {
    alert(`You bought ${item.name} for ${item.price}`);
  }
}
