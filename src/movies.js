// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(data) {
  let newList = data.map(function (elem) {
    return elem.director;
  });
  return newList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(data) {
  let newList = data.filter(function (elem) {
    return elem.director === 'Steven Spielberg' && elem.genre.includes('Drama');
  });
  return newList.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(data) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(data) {
  let newList = data.filter(function (elem) {
    return elem.genre.includes('Drama');
  });
  let average = newList.reduce(function (total, current) {
    return total + current.rate;
  }, 0);
  return parseFloat(average / newList.length);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data) {
  const newList = data.sort(function (a, b) {
    return a.year - b.year;
  });

  return Array.from(newList);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(data) {
  const listMovies = data.filter(function (movies) {
    return movies.title;
  });
  const alphaList = listMovies.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  return alphaList.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
