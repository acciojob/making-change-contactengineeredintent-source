const makeChange = (c) => {
  // your name here
	let q_count = 0;
    let d_count = 0;
    let n_count = 0;
    let p_count = 0;
    
    let map = new Map([
        [25, 'q'],
        [10, 'd'],
        [5, 'n'],
        [1, 'p']
    ]);

    while(c > 0){
        let largestKey = 0;
        for(const key of map.keys()){
            if(key <= c && key > largestKey){
                largestKey = key;
            }
        }
        // console.log(`c = ${c}`);
        // console.log(`largest key = ${largestKey}`);
        if(map.get(largestKey) == 'q'){
            q_count++;
        }
        else if(map.get(largestKey) == 'd'){
            d_count++;
        }
        else if(map.get(largestKey) == 'n'){
            n_count++;
        }
        else{
            p_count++;
        }
        c = c - largestKey;
    }
    
    // console.log(`q = ${q_count}, d = ${d_count}, n = ${n_count}, p = ${p_count}`);
    const obj = {
		 q: q_count, 
		 d: d_count, 
		 n: n_count,
		 p: p_count);
    }
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
