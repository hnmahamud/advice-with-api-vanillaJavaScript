const loadRandomAdvice = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        displayRandomAdvice(data);
    }
    catch (error){
        console.log(error);
    }
}

const loadRandomAdviceById = async () => {
    const idInput = document.getElementById('id-input');
    let url;
    if(!isNaN(idInput.value) && idInput.value !== '' && idInput.value > 0) {
        url = `https://api.adviceslip.com/advice/${idInput.value}`;
    }
    else {
        url = `https://api.adviceslip.com/advice/9`;
    }
    try {
        const res = await fetch(url);
        const data = await res.json();
        if(data.slip) {
            displayRandomAdviceById(data);
        }
        else {
            alert('Enter valid id!')
        }
    }
    catch (error){
        console.log(error);
    }
}

const loadRandomAdviceByKeyword = async (keyword) => {
    let url;
    if(keyword) {
        url = `https://api.adviceslip.com/advice/search/${keyword}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.slips[0]);
            displayRandomAdviceByKeyword(data.slips[0]);
        }
        catch (error){
            console.log(error);
        }
    }
    else {
        const keywordInput = document.getElementById('keyword-input');
        if(keywordInput.value !== '') {
            url = `https://api.adviceslip.com/advice/search/${keywordInput.value}`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data.slips[0]);
                displayRandomAdviceByKeyword(data.slips[0]);
            }
            catch (error){
                console.log(error);
            }
        }
        else {
            alert('Enter valid keyword!');
        }
    }
}

loadRandomAdvice();
loadRandomAdviceById();
loadRandomAdviceByKeyword('good');