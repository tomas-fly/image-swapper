import { AfterViewInit, Component, Input } from '@angular/core';

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
  get current(): number {
    return this._current;
  }
  set current(value: number) {
    this._current = value;
    this.generateCurrentImages();
  }

  get currentImageSrc(): string {
    return this.generateImageName(this.current);
  }

  currentImages: string[] = [];

  private _current: number = 0;

  constructor() { }

  ngAfterViewInit(): void {
    this.generateCurrentImages();
  }

  private generateCurrentImages(): void {
    const start = Math.max(0, +this.current - this.preload);
    const count = Math.min(this.count, +this.current + +this.preload + 1) - start;
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
