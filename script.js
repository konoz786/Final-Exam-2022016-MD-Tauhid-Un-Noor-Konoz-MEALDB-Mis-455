function connect() {
    var searchText = document.getElementById('search').value;
    var quantity = document.getElementById('limit').value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => showData(data, quantity));
  
    document.getElementById('search').value = "";
    document.getElementById('limit').value = "";
  }
  
  function showData(data, quantity) {
    var mealSection = document.getElementById('mealSection');
    mealSection.innerHTML = "";
  
    for (var i = 0; i < quantity; i++) {
      var mealDiv = document.createElement('div');
      mealDiv.classList.add('col-md-4');
      mealDiv.innerHTML = `
        <div class="card mb-4">
          <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="${data.meals[i].strMeal}">
          <div class="card-body">
            <h5 class="card-title">${data.meals[i].strMeal}</h5>
            <p class="card-text">${data.meals[i].strArea} | ${data.meals[i].strCategory}</p>
            <a href="${data.meals[i].strYoutube}" target="_blank" class="btn btn-primary">Watch on YouTube</a>
            <p class="card-text">${data.meals[i].strInstructions}</p>
          </div>
        </div>
      `;
      mealSection.appendChild(mealDiv);
    }
  }
  
  document.getElementById('searchBtn').addEventListener('click', connect);
  