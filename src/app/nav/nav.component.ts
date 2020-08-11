import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  theme: string = 'light';
  route: string;
  constructor(
    private themeService: ThemeService,
    private location: Location,
    private router: Router
  ) { 
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "Home";
      }
      console.log(this.route);
    });
  }

  ngOnInit(): void {
    console.log(window.location.href);
  }

  toggleTheme(theme) {
    this.themeService.setTheme(theme)
    // if (this.themeService.isDarkTheme()) {
    //   this.themeService.setLightTheme();
    // } else {
    //   this.themeService.setDarkTheme();
    // }
  }
}
