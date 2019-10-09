import { Component, OnInit } from '@angular/core';
import { GuithubService } from '../guithub.service';
import { FormControl } from '@angular/forms';
import { Observable, of, empty } from 'rxjs';
import {
  switchMap,
  distinctUntilChanged,
  debounceTime,
  filter,
  startWith
} from 'rxjs/operators';
import { Result } from '../Models/GithubUser';

@Component({
  selector: 'app-github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.scss']
})
export class GithubTableComponent implements OnInit {
  constructor(private guithubService: GuithubService) {}
  filteredUserName$: Observable<Result>;
  searchedUserForm = new FormControl(['souhail']);
  isLoading: false;
  ngOnInit() {
    this.filteredUserName$ = this.seach();
  }
  seach() {
    return this.searchedUserForm.valueChanges.pipe(
      startWith('souhail'),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap((e: string) =>
        e.trim().length > 0 ? this.guithubService.search(e) : empty()
      )
    );
  }
}
