import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
// export class StarComponent implements OnInit, OnChanges {
export class StarComponent implements OnChanges {

  @Input() ratingValue: number = 0
  outerDivWidth = 100
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
    console.log('[Star] created')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log('changes')
    this.outerDivWidth = this.ratingValue * 14;
  }
  // ngOnInit(): void {
  //   console.log('init')
  //   this.outerDivWidth = this.ratingValue * 14;
  // }

  updateRating() {
    //new Event('ratingChanged',{})
    let updatedRating = Number(prompt('update rating', this.ratingValue.toString()));
    this.ratingChanged.emit(updatedRating);
    //this.ratingValue = updatedRating;
    // this.outerDivWidth = this.ratingValue * 14;
  }
}
