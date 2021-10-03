export const numberToDays = (chartData, labels, data, startYear) =>{
    if(chartData){
    for (const key in chartData) {
        if (chartData.hasOwnProperty(key)) {
          data.push(chartData[key] * 100);  
            console.log(`ALLKEYS${key}${chartData[key]}`);
            startYear = key.slice(0,4);
            let lastDig = key.slice(-2)
            // labels.push(key);
            if(parseInt(lastDig) === 1){
              labels.push('Jan');
            } 
            if(parseInt(lastDig) === 2){
              labels.push('Feb');
            }
            if(parseInt(lastDig) === 3){
              labels.push('Mar');
            }
            if(parseInt(lastDig) === 4){
              labels.push('Apr');
            }
            if(parseInt(lastDig) === 5){
              labels.push('May');
            }
            if(parseInt(lastDig) === 6){
              labels.push('Jun');
            }
             if(parseInt(lastDig) === 7){
               labels.push('Jul');
             }
            if(parseInt(lastDig) === 8){
              labels.push('Aug');
            }
            if(parseInt(lastDig) === 9){
              labels.push('Sep');
            }
            if(parseInt(lastDig) === 10){
              labels.push('Oct');
            }
            if(parseInt(lastDig) === 11){
              labels.push('Nov');
            }
            if(parseInt(lastDig) === 12){
              labels.push('Dec');
            }
  
        }
        else{
            labels.push('Jan');
            data.push(1);
        }
    }
    }
    return {labels, data, startYear}
}