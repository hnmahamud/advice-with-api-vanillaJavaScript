const displayRandomAdvice = (data) => {
    const randomAdviceCard = document.getElementById('random-advice-card');
    randomAdviceCard.innerHTML = '';
    randomAdviceCard.innerHTML = `
    <p>Advice #${data.slip.id}</p>
    <h2 class="card-title">${data.slip.advice}</h2>
    `
}

const displayRandomAdviceById = (data) => {
    const randomAdviceCardById = document.getElementById('random-advice-card-by-id');
    randomAdviceCardById.innerHTML = '';
    randomAdviceCardById.innerHTML = `
    <p>Advice #${data.slip.id}</p>
    <h2 class="card-title">${data.slip.advice}</h2>
    `
}

const displayRandomAdviceByKeyword = (data) => {
    const randomAdviceCardByKeyword = document.getElementById('random-advice-card-by-keyword');
    randomAdviceCardByKeyword.innerHTML = '';
    randomAdviceCardByKeyword.innerHTML = `
    <p>Advice #${data.id}</p>
    <h2 class="card-title">${data.advice}</h2>
    `
}