import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCreatePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
