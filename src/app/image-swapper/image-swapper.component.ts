import { AfterViewInit, Component, Input } from '@angular/core';
import { BehaviorSubject, throttleTime } from 'rxjs';

@Component({
  selector: 'app-image-swapper',
  templateUrl: './image-swapper.component.html',
  styleUrls: ['./image-swapper.component.scss']
})
export class ImageSwapperComponent implements AfterViewInit {

  @Input() prefix: string = '';
  @Input() ext: string = '';
  @Input() count: number = 0;
  @Input() preload: number = 5;
  @Input() step: number = 1;

  @Input()
  set current(value: number) {
    this._current = value;
    this.currentChange.next(value);
  }

  get currentImageSrc(): string {
    return this.generateImageName(this._current);
  }

  currentImages: string[] = [];

  private _current: number = 0;
  private currentChange = new BehaviorSubject(this._current);

  constructor() { }

  ngAfterViewInit(): void {
    this.currentChange.pipe(throttleTime(100)).subscribe((p) => this.generateCurrentImages(p));
  }

  private generateCurrentImages(current: number): void {
    const start = Math.max(0, +current - this.preload);
    const count = Math.min(this.count, +current + +this.preload + 1) - start;
    console.log('count', count);
    this.currentImages = this.generateArray(start, count, this.step).map(index => this.generateImageName(index));
  }

  private generateImageName(index: number): string {
    return `${this.prefix}${index}.${this.ext}`;
  }

  private generateArray(start: number, count: number, step: number): number[] {
    return Array.from({ length: count }, (_, i) => start + i * step);
  }
}
