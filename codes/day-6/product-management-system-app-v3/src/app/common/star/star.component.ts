import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() ratingValue: number = 0
  outerDivWidth = 100
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
    console.log('[Star] created')
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    // console.log('changes')
    this.outerDivWidth = this.ratingValue * 14;
  }

  updateRating() {
    let updatedRating = Number(prompt('update rating', this.ratingValue.toString()));
    this.ratingChanged.emit(updatedRating);
  }
}
