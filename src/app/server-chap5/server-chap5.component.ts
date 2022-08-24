import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server-chap5',
  templateUrl: './server-chap5.component.html',
  styleUrls: ['./server-chap5.component.css']
})
export class ServerChap5Component implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('serverElement') server: Server = new Server('', '', '');
  @Input() name: string = '';
  @ViewChild('heading') heading!: ElementRef;
  @ContentChild('contentParagraph') contentParagraph!: ElementRef;

  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log("TExt content: " + this.heading?.nativeElement.textContent)
    console.log("TExt content paragraph: " + this.contentParagraph?.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log("TExt content paragraph: " + this.contentParagraph?.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.heading?.nativeElement.textContent)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


}
