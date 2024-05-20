// console.log('welcome to my recipe app');

// const CardsContainer = document.getElementById('cards-container');
// const Input = document.getElementById('input');

// const FetchData = async (query) => {
//     try {
//         const Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//         const response = await Data.json();
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// const SearchRecipe = () => {
//     document.getElementById('btn').addEventListener('click', (e) => {
//         e.preventDefault();
//         if (!Input.value) return;
//         FetchData(Input.value);
//         FillData(FetchData)
//     })
// }

// function FillData(response) {
//     if (!response.meals.strMealThumb) return;
//     CardsContainer.innerHTML = '';
//     response.meals.forEach(meal => {
//         let div = document.createElement('div');
//         div.innerHTML = `
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//             <h2>${meal.strMeal}</h2>
//             <p>${meal.strInstructions}</p>
//         `;
//         CardsContainer.append(div);
//     });
// }

// SearchRecipe();

console.log('welcome to my recipe app');

const CardsContainer = document.getElementById('cards-container');
const Input = document.getElementById('input');

const FetchData = async (query) => {
    try {
        const Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await Data.json();
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const SearchRecipe = () => {
    document.getElementById('btn').addEventListener('click', async (e) => {
        e.preventDefault();
        if (!Input.value.trim()) return;
        const response = await FetchData(Input.value.trim());
        // if (response) {
        FillData(response);
        // }
    });
}

function FillData(response) {
    if (!response.meals) {
        CardsContainer.innerHTML = '<p>No meals found</p>';
        return;
    }

    CardsContainer.innerHTML = '';
    response.meals.forEach(meal => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <div class="card-img">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            </div>
            <div class="recipe-content">
            <h2>${meal.strMeal}</h2>
            <p class='instructions space'>Instructions:</p>
            <p class="space">${meal.strInstructions}</p>
            </div>
        `;
        CardsContainer.append(div);
    });
}

SearchRecipe();
