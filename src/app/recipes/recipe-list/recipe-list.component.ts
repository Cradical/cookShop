import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A New Recipe',
      'A simple description',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsweetandsavorymeals.com%2Fwp-content%2Fuploads%2F2019%2F01%2FBest-Meatloaf-Recipe-4.jpg&f=1&nofb=1'
    ),
    new Recipe(
      'A New Recipe',
      'A simple description',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsweetandsavorymeals.com%2Fwp-content%2Fuploads%2F2019%2F01%2FBest-Meatloaf-Recipe-4.jpg&f=1&nofb=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
