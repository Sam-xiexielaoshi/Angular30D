import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.scss',
})
export class Stopwatch {
  private logs: string[] = [];
  elapsedTime = 0;
  isRunning = false;
  intervalRef: ReturnType<typeof setInterval> | null = null;

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
    }, 100);
    const logMessage = `stop watch started at ${this.formatTime()}`;
    this.logs.push(logMessage);
    console.log(logMessage);
  }

  private stop() {
    this.isRunning = false;
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      const logMessage = `stopwatch stopped at ${this.formatTime()}
      `;
      this.logs.push(logMessage);
    }
  }
  getLogs(): string[] {
    return this.logs;
  }

  reset() {
    const finalTime = this.formatTime();
    this.isRunning = false;
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
    this.elapsedTime = 0;
    this.logs=[];
    console.log(`stopwatch reset from ${finalTime} to 00:00.0`);
  }

  formatTime(): string {
    const minutes = Math.floor(this.elapsedTime / 60);
    const seconds = Math.floor(this.elapsedTime % 60);
    const tenths = Math.floor((this.elapsedTime * 10) % 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${tenths}`;
  }
}
