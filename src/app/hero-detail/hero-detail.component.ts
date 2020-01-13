import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute, Params} from '@angular/router';
import {Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero:Hero;
  constructor(
    private heroService: HeroService,
    private route:ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params:Params) =>
    this.heroService.getHero(+params['id'])))
    .subscribe(hero=>this.hero=hero);
  }
  goBack(){
    this.location.back();
  }

}
