import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color: 'primary' | 'secondary' | 'warning' | 'danger' = 'secondary';
  @Input() value: 'Button';
  @Input() type: 'submit' | 'button' | 'reset' | 'menu' = 'button';
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {
  }
}
