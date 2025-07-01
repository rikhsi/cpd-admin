import { Injectable, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable()
export class TimerService {
  private totalSeconds = 0;
  private timerSub: Subscription | null = null;

  readonly leftSeconds = signal<number>(0);

  initTimer(durationInSeconds: number): void {
    this.stopTimer();
    this.totalSeconds = durationInSeconds;
    this.leftSeconds.set(durationInSeconds);
  }

  startTimer(): void {
    if (this.totalSeconds <= 0 || this.timerSub) return;

    this.timerSub = interval(1000)
      .pipe(
        map((tick) => this.totalSeconds - tick - 1),
        takeWhile((remaining) => remaining >= 0)
      )
      .subscribe({
        next: (secondsLeft) => this.leftSeconds.set(secondsLeft),
        complete: () => this.stopTimer(),
      });
  }

  stopTimer(): void {
    this.timerSub?.unsubscribe();
    this.timerSub = null;
  }
}
