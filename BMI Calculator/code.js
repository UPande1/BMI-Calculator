const form = document.querySelector('form');

form.addEventListener('submit', function(e) { 
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height <= 0 || height === '' || isNaN(height)) { 
        results.innerHTML = `Please input a valid height`;
    }else if(weight <= 0 || weight === '' || isNaN(weight)) { 
        results.innerHTML = `Please input a valid weight`;
    } else { 
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       
        // switch (bmi) { 
        //     case bmi<=18.6 :
        //         results.innerHTML = `<span> ${bmi} Your BMI is too low</span>`;
        //         break;
        //     case bmi>18.6 && bmi <= 24.9:
        //         results.innerHTML = `<span> ${bmi} Your BMI is too low</span>`;
        //         break;
        //     case bmi > 24.9 :
        //         results.innerHTML = `<span> ${bmi} Your BMI is too low</span>`;
        //         break;
        // }
        if(bmi<=18.6 ) {
            results.innerHTML = `<span> ${bmi} You are Under Weight</span>`;
        }else if(bmi>18.6 && bmi <= 24.9) {
            results.innerHTML = `<span> ${bmi} You are Fit</span>`;
        } else {
            results.innerHTML = `<span> ${bmi} You are Over Weight</span>`;
        }
        

    }

})