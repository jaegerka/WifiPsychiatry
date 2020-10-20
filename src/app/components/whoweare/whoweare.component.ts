import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.css']
})
export class WhoweareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  conditions = [
    { id: "Depression" }, 
    { id: "Anxiety Disorders" },
    { id: "Bipolar Disorder" },
    { id: "Schizophrenia" },
    { id: "PTSD"},
    { id: "Insomnia" },
    { id: "Attention Deficit Disorders" },
    { id: "Obsessives Compulsive Disorder" },
  ]
}
