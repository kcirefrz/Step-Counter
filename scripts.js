function count() {
    let start = document.getElementById('txts');
    let end = document.getElementById('txte');
    let step = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossible to count!';
    } else {
        res.innerHTML = 'Counting: <br>';
        let s = Number(start.value);
        let e = Number(end.value);
        let p = Number(step.value);
        if (p <= 0) {
            window.alert('Invalid step! Considering as STEP 1');
            p = 1;
        }
        if (s < e) {
            for(let c = s; c <= e; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            for(let c = s; c >= e; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}