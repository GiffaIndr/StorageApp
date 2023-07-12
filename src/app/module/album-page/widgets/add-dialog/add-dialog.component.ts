import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {
  items!: any[];

  selectedItem: any;

  suggestions!: any[];

  search(event: { query: string; }) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
  
  @Input() isOpen: boolean = true
  @Input() dialogMode: string = 'ADD'
  @Output() closeSelf = new EventEmitter<boolean>()
  @Output() isLoading = new EventEmitter<boolean>()

  
  onClose(){
    this.closeSelf.emit(false);
  }
}
