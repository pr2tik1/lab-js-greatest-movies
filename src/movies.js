// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// function getAllDirectors(moviesArray) {
//   const directors = moviesArray.map(movie => movie.director);
//   return [...new Set(directors)];
// }

// function getAllDirectors(moviesArray) {
//   const directors = moviesArray.map(movie => movie.director);
//   return directors.filter((director, index) => directors.indexOf(director) === index);
// }

// function getAllDirectors(moviesArray) {
//   return moviesArray
//     .map(movie => movie.director)
//     .reduce((uniqueDirectors, director) => {
//       if (!uniqueDirectors.includes(director)) {
//         uniqueDirectors.push(director);
//       }
//       return uniqueDirectors;
//     }, []);
// }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  for(let i=0; i<moviesArray.length; i++){
    if(moviesArray[i].director==="Steven Spielberg" && moviesArray[i].genre.includes('Drama')){
      count++;
    }
  }
  return count;
}

// function howManyMovies(moviesArray) {
//   return moviesArray.filter(movie => 
//     movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
//   ).length;
// }

// function howManyMovies(moviesArray) {
//   return moviesArray.reduce((count, movie) => {
//     if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
//       return count + 1;
//     }
//     return count;
//   }, 0);
// }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let count = 0;
  let totalScore = 0;

  for (let i = 0; i < moviesArray.length; i++) {
    if (typeof moviesArray[i].score === 'number' && !isNaN(moviesArray[i].score)) {
      totalScore += moviesArray[i].score;
      count++;
    }else {
      totalScore += 0;
      count++;
    }
  }

  // If no movies have scores, return 0
  if (count === 0) {
    return 0;
  }

  const averageScore = totalScore / count;
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovies.length===0) 
    return 0;
  const totalScore = dramaMovies.reduce((sum, movie) =>{
    return sum + (movie.score || 0);
  }, 0);
  const averageScore = totalScore/dramaMovies.length;
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  moviesCopy.sort((a, b) =>{
    // First, compare by year
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    // If years are the same, compare by title
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  })
  return moviesCopy;
}

// function orderByYear(moviesArray) {
//   return moviesArray.slice().sort((a, b) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return a.title.localeCompare(b.title);
//     }
//   });
// }

// function orderByYear(moviesArray) {
//   return moviesArray.map(movie => movie).sort((a, b) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return a.title.localeCompare(b.title);
//     }
//   });
// }

// function orderByYear(moviesArray) {
//   return moviesArray.reduce((sortedArray, currentMovie) => {
//     let added = false;
//     for (let i = 0; i < sortedArray.length; i++) {
//       if (currentMovie.year < sortedArray[i].year || 
//           (currentMovie.year === sortedArray[i].year && currentMovie.title.localeCompare(sortedArray[i].title) < 0)) {
//         sortedArray.splice(i, 0, currentMovie);
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       sortedArray.push(currentMovie);
//     }
//     return sortedArray;
//   }, []);
// }

// function orderByYear(moviesArray) {
//   return [].concat(moviesArray).sort((a, b) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return a.title.localeCompare(b.title);
//     }
//   });
// }

// function orderByYear(moviesArray) {
//   const moviesCopy = [];
//   moviesArray.forEach(movie => moviesCopy.push(movie));
  
//   moviesCopy.sort((a, b) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return a.title.localeCompare(b.title);
//     }
//   });
  
//   return moviesCopy;
// }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedArray = [...moviesArray];
  sortedArray.sort((a, b) => a.title.localeCompare(b.title));
  const first20Titles = sortedArray.slice(0, 20).map(movie => movie.title);
  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = moviesArray.map(movie => {
    // Parse the duration string to extract hours and minutes
    const durationParts = movie.duration.split(' ');

    let totalMinutes = 0;

    // Process each part of the duration string
    durationParts.forEach(part => {
      if (part.includes('h')) {
        // Extract hours and convert to minutes
        totalMinutes += parseInt(part) * 60;
      } else if (part.includes('min')) {
        // Extract minutes and add to total
        totalMinutes += parseInt(part);
      }
    });

    // Update the duration property of the movie object
    return { ...movie, duration: totalMinutes };
  });

  return updatedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const yearAverages = {};
  moviesArray.forEach(movie => {
    const year = movie.year;
    const score = movie.score;
    
    if (!yearAverages[year]) {
      yearAverages[year] = { totalScore: 0, movieCount: 0 };
    }

    yearAverages[year].totalScore += score;
    yearAverages[year].movieCount++;
  });
  for (const year in yearAverages) {
    yearAverages[year].averageScore = yearAverages[year].totalScore / yearAverages[year].movieCount;
  }
  let bestYear = null;
  let bestAverage = -Infinity;
  let oldestYear = Infinity;

  for (const year in yearAverages) {
    if (yearAverages[year].averageScore > bestAverage) {
      bestYear = year;
      bestAverage = yearAverages[year].averageScore;
      oldestYear = year;
    } else if (yearAverages[year].averageScore === bestAverage && parseInt(year) < oldestYear) {
      oldestYear = parseInt(year);
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}


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
    bestYearAvg,
  };
}
