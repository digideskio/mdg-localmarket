UI.registerHelper('categoryName', function(shortName) {
  return Recipes.SEASON_NAMES[shortName];
});

UI.registerHelper('recipeImage', function(recipe) {
  return '/img/recipes/' + recipe.imageName;
});

Handlebars.registerHelper('activePage', function() {
  // includes Spacebars.kw but that's OK because the route name ain't that.
  var routeNames = arguments;

  return _.include(routeNames, Router.current().route.name) && 'active';
});