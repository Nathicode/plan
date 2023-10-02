function myfuncs() {
document.getElementById("medium").style.display = "none";
document.getElementById("bottom").style.display = "flex";
  let great = Math.floor(Math.random() * (100 - 97)) + 97;
  let normal = Math.floor(Math.random() * (95 - 90)) + 90;
  let weak = Math.floor(Math.random() * (90 - 80)) + 80;
  let midweak = Math.floor(Math.random() * (80 - 70)) + 70;
  let midgreat = Math.floor(Math.random() * (89 - 80)) + 80;
  let lazyweak =  Math.floor(Math.random() * (80 - 70)) + 70;
 let math = document.getElementById("math");
 let physics = document.getElementById("physics");
 let chemistry = document.getElementById("chemistry");
 let english = document.getElementById("english");
 let geography = document.getElementById("geography");
 let civics = document.getElementById("civics");
 let history = document.getElementById("history");
 let biology = document.getElementById("biology");
 
 let sums = document.getElementById("sum");
 let value1 = document.getElementById("select").value;
 let value2 = document.getElementById("selects").value;
 let gobez = document.getElementById("gobez");
 let med = document.getElementById("mediums");
 let lazy = document.getElementById("lazy");
     if (gobez.checked == true && value1 == 'physics' && value2 == 'chemistry2') {
        physics.innerHTML = great;
        chemistry.innerHTML = weak;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 2;
        biology.innerHTML = normal;
        civics.innerHTML = normal + .2;
        math.innerHTML = normal + 4;
        english.innerHTML = normal - 1.5;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'physics' && value2 == 'maths2') {
        physics.innerHTML = great;
        chemistry.innerHTML = normal + 4;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 2;
        biology.innerHTML = normal;
        civics.innerHTML = normal + .2;
        math.innerHTML = weak;
        english.innerHTML = normal - 1.5;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'physics' && value2 == 'english2') {
        physics.innerHTML = great;
        chemistry.innerHTML = normal + 4;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 2;
        biology.innerHTML = normal;
        civics.innerHTML = normal + .2;
        math.innerHTML = normal - 1.5;
        english.innerHTML = weak;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'physics' && value2 == 'biology2') {
        physics.innerHTML = great;
        chemistry.innerHTML = normal + 4;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 2;
        biology.innerHTML = weak;
        civics.innerHTML = normal + .2;
        math.innerHTML = normal - 1.5;
        english.innerHTML = normal;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'physics' && value2 == 'civics2') {
        physics.innerHTML = great;
        chemistry.innerHTML = normal + 4;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 2;
        biology.innerHTML =  normal + .2;
        civics.innerHTML = weak;
        math.innerHTML = normal - 1.5;
        english.innerHTML = normal;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'physics' && value2 == 'history2') {
        physics.innerHTML = great;
        chemistry.innerHTML = normal + 4;
        history.innerHTML = weak;
        geography.innerHTML = normal - 2;
        biology.innerHTML =  normal + .2;
        civics.innerHTML = normal + 2;
        math.innerHTML = normal - 1.5;
        english.innerHTML = normal;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'physics' && value2 == 'geography2') {
        physics.innerHTML = great;
        chemistry.innerHTML = normal + 4;
        history.innerHTML = normal - 2;
        geography.innerHTML = weak;
        biology.innerHTML =  normal + .2;
        civics.innerHTML = normal + 2;
        math.innerHTML = normal - 1.5;
        english.innerHTML = normal;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'chemistry' && value2 == 'physics2') {
        physics.innerHTML = weak;
        chemistry.innerHTML = great;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 4;
        biology.innerHTML =  normal + .2;
        civics.innerHTML = normal + 2;
        math.innerHTML = normal - 1.5;
        english.innerHTML = normal;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'chemistry' && value2 == 'maths2') {
        physics.innerHTML = normal - 1.5;
        chemistry.innerHTML = great;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 4;
        biology.innerHTML =  normal + .2;
        civics.innerHTML = normal + 2;
        math.innerHTML = weak;
        english.innerHTML = normal;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'chemistry' && value2 == 'english2') {
        physics.innerHTML = normal - 1.5;
        chemistry.innerHTML = great;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 4;
        biology.innerHTML =  normal + .2;
        civics.innerHTML = normal + 2;
        math.innerHTML = normal;
        english.innerHTML = weak;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'chemistry' && value2 == 'biology2') {
        physics.innerHTML = normal - 1.5;
        chemistry.innerHTML = great;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 4;
        biology.innerHTML = weak;
        civics.innerHTML = normal + 2;
        math.innerHTML = normal;
        english.innerHTML =  normal + .2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'chemistry' && value2 == 'civics2') {
        physics.innerHTML = normal - 1.5;
        chemistry.innerHTML = great;
        history.innerHTML = normal - 2;
        geography.innerHTML = normal + 4;
        biology.innerHTML = normal + 2;
        civics.innerHTML = weak;
        math.innerHTML = normal;
        english.innerHTML =  normal + .2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'chemistry' && value2 == 'history2') {
        physics.innerHTML = normal - 1.5;
        chemistry.innerHTML = great;
        history.innerHTML = weak;
        geography.innerHTML = normal + 4;
        biology.innerHTML = normal + 2;
        civics.innerHTML = normal - 2;
        math.innerHTML = normal;
        english.innerHTML =  normal + .2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'chemistry' && value2 == 'geography2') {
        physics.innerHTML = normal - 1.5;
        chemistry.innerHTML = great;
        history.innerHTML = normal + 4;
        geography.innerHTML = weak;
        biology.innerHTML = normal + 2;
        civics.innerHTML = normal - 2;
        math.innerHTML = normal;
        english.innerHTML =  normal + .2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'maths' && value2 == 'physics2') {
        physics.innerHTML = weak;
        chemistry.innerHTML = normal;
        history.innerHTML = normal + 4;
        geography.innerHTML = normal - 1.5;
        biology.innerHTML = normal + 2;
        civics.innerHTML = normal - 2;
        math.innerHTML = great;
        english.innerHTML =  normal + .2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'maths' && value2 == 'chemistry2') {
        physics.innerHTML = normal;
        chemistry.innerHTML = weak;
        history.innerHTML = normal + 4;
        geography.innerHTML = normal - 1.5;
        biology.innerHTML = normal + 2;
        civics.innerHTML = normal - 2;
        math.innerHTML = great;
        english.innerHTML =  normal + .2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'maths' && value2 == 'english2') {
        physics.innerHTML = normal;
        chemistry.innerHTML = normal + .2;
        history.innerHTML = normal + 4;
        geography.innerHTML = normal - 1.5;
        biology.innerHTML = normal + 2;
        civics.innerHTML = normal - 2;
        math.innerHTML = great;
        english.innerHTML =  weak;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'maths' && value2 == 'biology2') {
        physics.innerHTML = normal;
        chemistry.innerHTML = normal + .2;
        history.innerHTML = normal + 4;
        geography.innerHTML = normal - 1.5;
        biology.innerHTML = weak;
        civics.innerHTML = normal - 2;
        math.innerHTML = great;
        english.innerHTML =  normal + 2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'maths' && value2 == 'civics2') {
        physics.innerHTML = normal;
        chemistry.innerHTML = normal + .2;
        history.innerHTML = normal + 4;
        geography.innerHTML = normal - 1.5;
        biology.innerHTML = normal - 2;
        civics.innerHTML = weak;
        math.innerHTML = great;
        english.innerHTML =  normal + 2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'maths' && value2 == 'history2') {
        physics.innerHTML = normal;
        chemistry.innerHTML = normal + .2;
        history.innerHTML = weak;
        geography.innerHTML = normal - 1.5;
        biology.innerHTML = normal - 2;
        civics.innerHTML = normal + 4;
        math.innerHTML = great;
        english.innerHTML =  normal + 2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'maths' && value2 == 'geography2') {
        physics.innerHTML = normal;
        chemistry.innerHTML = normal + .2;
        history.innerHTML = normal - 1.5;
        geography.innerHTML = weak;
        biology.innerHTML = normal - 2;
        civics.innerHTML = normal + 4;
        math.innerHTML = great;
        english.innerHTML =  normal + 2;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'english' && value2 == 'physics2') {
        physics.innerHTML = weak;
        chemistry.innerHTML = normal + .2;
        history.innerHTML = normal - 1.5;
        geography.innerHTML =  normal;
        biology.innerHTML = normal - 2;
        civics.innerHTML = normal + 4;
        math.innerHTML = normal + 2;
        english.innerHTML =  great;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'english' && value2 == 'chemistry2') {
        physics.innerHTML = normal + .2;
        chemistry.innerHTML = weak;
        history.innerHTML = normal - 1.5;
        geography.innerHTML =  normal;
        biology.innerHTML = normal - 2;
        civics.innerHTML = normal + 4;
        math.innerHTML = normal + 2;
        english.innerHTML =  great;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'english' && value2 == 'biology2') {
        physics.innerHTML = normal + .2;
        chemistry.innerHTML = normal - 2;
        history.innerHTML = normal - 1.5;
        geography.innerHTML =  normal;
        biology.innerHTML = weak;
        civics.innerHTML = normal + 4;
        math.innerHTML = normal + 2;
        english.innerHTML =  great;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'english' && value2 == 'civics2') {
        physics.innerHTML = normal + .2;
        chemistry.innerHTML = normal - 2;
        history.innerHTML = normal - 1.5;
        geography.innerHTML =  normal;
        biology.innerHTML = normal + 4;
        civics.innerHTML = weak;
        math.innerHTML = normal + 2;
        english.innerHTML =  great;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'english' && value2 == 'history2') {
        physics.innerHTML = normal + .2;
        chemistry.innerHTML = normal - 2;
        history.innerHTML = weak;
        geography.innerHTML =  normal;
        biology.innerHTML = normal + 4;
        civics.innerHTML = normal - 1.5;
        math.innerHTML = normal + 2;
        english.innerHTML =  great;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }
    if (gobez.checked == true && value1 == 'english' && value2 == 'geography2') {
        physics.innerHTML = normal + .2;
        chemistry.innerHTML = normal - 2;
        history.innerHTML = normal;
        geography.innerHTML =  weak;
        biology.innerHTML = normal + 4;
        civics.innerHTML = normal - 1.5;
        math.innerHTML = normal + 2;
        english.innerHTML =  great;
        sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
    }

if (gobez.checked == true && value1 == 'biology' && value2 == 'physics2') {
    physics.innerHTML = weak;
    chemistry.innerHTML = normal - 2;
    history.innerHTML = normal;
    geography.innerHTML =  normal + .2;
    biology.innerHTML = great;
    civics.innerHTML = normal - 1.5;
    math.innerHTML = normal + 2;
    english.innerHTML =  normal + 4;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'biology' && value2 == 'chemistry2') {
    physics.innerHTML = normal - 2;
    chemistry.innerHTML = weak;
    history.innerHTML = normal;
    geography.innerHTML =  normal + .2;
    biology.innerHTML = great;
    civics.innerHTML = normal - 1.5;
    math.innerHTML = normal + 2;
    english.innerHTML =  normal + 4;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'biology' && value2 == 'maths2') {
    physics.innerHTML = normal - 2;
    chemistry.innerHTML = normal + 2;
    history.innerHTML = normal;
    geography.innerHTML =  normal + .2;
    biology.innerHTML = great;
    civics.innerHTML = normal - 1.5;
    math.innerHTML = weak;
    english.innerHTML =  normal + 4;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'biology' && value2 == 'english2') {
    physics.innerHTML = normal - 2;
    chemistry.innerHTML = normal + 2;
    history.innerHTML = normal;
    geography.innerHTML =  normal + .2;
    biology.innerHTML = great;
    civics.innerHTML = normal - 1.5;
    math.innerHTML = normal + 4;
    english.innerHTML =  weak;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'biology' && value2 == 'civics2') {
    physics.innerHTML = normal - 2;
    chemistry.innerHTML = normal + 2;
    history.innerHTML = normal;
    geography.innerHTML =  normal + .2;
    biology.innerHTML = great;
    civics.innerHTML = weak;
    math.innerHTML = normal + 4;
    english.innerHTML =  normal - 1.5;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'biology' && value2 == 'history2') {
    physics.innerHTML = normal - 2;
    chemistry.innerHTML = normal + 2;
    history.innerHTML = weak;
    geography.innerHTML =  normal + .2;
    biology.innerHTML = great;
    civics.innerHTML = normal;
    math.innerHTML = normal + 4;
    english.innerHTML =  normal - 1.5;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'biology' && value2 == 'geography2') {
    physics.innerHTML = normal - 2;
    chemistry.innerHTML = normal + 2;
    history.innerHTML = normal + .2;
    geography.innerHTML =  weak;
    biology.innerHTML = great;
    civics.innerHTML = normal;
    math.innerHTML = normal + 4;
    english.innerHTML =  normal - 1.5;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'civics' && value2 == 'physics2') {
    physics.innerHTML = weak;
    chemistry.innerHTML = normal + 2;
    history.innerHTML = normal + .2;
    geography.innerHTML =  normal - 2;
    biology.innerHTML = normal;
    civics.innerHTML = great;
    math.innerHTML = normal + 4;
    english.innerHTML =  normal - 1.5;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'civics' && value2 == 'chemistry2') {
    physics.innerHTML = normal + 2;
    chemistry.innerHTML = weak;
    history.innerHTML = normal + .2;
    geography.innerHTML =  normal - 2;
    biology.innerHTML = normal;
    civics.innerHTML = great;
    math.innerHTML = normal + 4;
    english.innerHTML =  normal - 1.5;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'civics' && value2 == 'maths2') {
    physics.innerHTML = normal + 2;
    chemistry.innerHTML = normal + 4;
    history.innerHTML = normal + .2;
    geography.innerHTML =  normal - 2;
    biology.innerHTML = normal;
    civics.innerHTML = great;
    math.innerHTML = weak;
    english.innerHTML =  normal - 1.5;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'civics' && value2 == 'english2') {
    physics.innerHTML = normal + 2;
    chemistry.innerHTML = normal + 4;
    history.innerHTML = normal + .2;
    geography.innerHTML =  normal - 2;
    biology.innerHTML = normal;
    civics.innerHTML = great;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  weak;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'civics' && value2 == 'biology2') {
    physics.innerHTML = normal + 2;
    chemistry.innerHTML = normal + 4;
    history.innerHTML = normal + .2;
    geography.innerHTML =  normal - 2;
    biology.innerHTML = weak;
    civics.innerHTML = great;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'civics' && value2 == 'history2') {
    physics.innerHTML = normal + 2;
    chemistry.innerHTML = normal + 4;
    history.innerHTML = weak;
    geography.innerHTML =  normal - 2;
    biology.innerHTML = normal + .2;
    civics.innerHTML = great;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'civics' && value2 == 'geography2') {
    physics.innerHTML = normal + 2;
    chemistry.innerHTML = normal + 4;
    history.innerHTML = normal - 2;
    geography.innerHTML =  weak;
    biology.innerHTML = normal + .2;
    civics.innerHTML = great;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'history' && value2 == 'physics2') {
    physics.innerHTML = weak;
    chemistry.innerHTML = normal + 4;
    history.innerHTML = great;
    geography.innerHTML =  normal + 2;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal - 2;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'history' && value2 == 'chemistry2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = weak;
    history.innerHTML = great;
    geography.innerHTML =  normal + 2;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal - 2;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'history' && value2 == 'maths2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = great;
    geography.innerHTML =  normal + 2;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal - 2;
    math.innerHTML = weak;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'history' && value2 == 'english2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = great;
    geography.innerHTML =  normal + 2;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal - 2;
    math.innerHTML = normal;
    english.innerHTML =  weak;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'history' && value2 == 'biology2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = great;
    geography.innerHTML =  normal + 2;
    biology.innerHTML = weak;
    civics.innerHTML = normal - 2;
    math.innerHTML = normal;
    english.innerHTML =  normal + .2;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'history' && value2 == 'civics2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = great;
    geography.innerHTML =  normal + 2;
    biology.innerHTML = normal - 2;
    civics.innerHTML = weak;
    math.innerHTML = normal;
    english.innerHTML =  normal + .2;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'history' && value2 == 'geography2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = great;
    geography.innerHTML =  normal + 2;
    biology.innerHTML = normal - 2;
    civics.innerHTML = weak;
    math.innerHTML = normal;
    english.innerHTML =  normal + .2;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'geography' && value2 == 'physics2') {
    physics.innerHTML = weak;
    chemistry.innerHTML = normal + 4;
    history.innerHTML = normal - 2;
    geography.innerHTML =  great;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal + 2;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'geography' && value2 == 'chemistry2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = weak;
    history.innerHTML = normal - 2;
    geography.innerHTML =  great;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal + 2;
    math.innerHTML = normal - 1.5;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'geography' && value2 == 'maths2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = normal - 2;
    geography.innerHTML =  great;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal + 2;
    math.innerHTML = weak;
    english.innerHTML =  normal;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'geography' && value2 == 'english2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = normal - 2;
    geography.innerHTML =  great;
    biology.innerHTML = normal + .2;
    civics.innerHTML = normal + 2;
    math.innerHTML = normal;
    english.innerHTML =  weak;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'geography' && value2 == 'biology2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = normal - 2;
    geography.innerHTML =  great;
    biology.innerHTML = weak;
    civics.innerHTML = normal + 2;
    math.innerHTML = normal;
    english.innerHTML =  normal + .2;
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'geography' && value2 == 'civics2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = normal - 2;
    geography.innerHTML =  great;
    biology.innerHTML = normal + 2;
    civics.innerHTML = weak;
    math.innerHTML = normal;
    english.innerHTML =  normal + .2; 
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
if (gobez.checked == true && value1 == 'geography' && value2 == 'history2') {
    physics.innerHTML = normal + 4;
    chemistry.innerHTML = normal - 1.5;
    history.innerHTML = weak;
    geography.innerHTML =  great;
    biology.innerHTML = normal + 2;
    civics.innerHTML = normal - 2;
    math.innerHTML = normal;
    english.innerHTML =  normal + .2; 
    sums.innerHTML = (great + weak + normal - 2 + normal + 2 + normal +  normal + .2 + normal + 4 + normal - 1.5) / 8;
}
    if (med.checked == true && value1 == 'physics' && value2 == 'chemistry2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML = midweak;
        history.innerHTML = weak - 2;
        geography.innerHTML = weak + 2;
        biology.innerHTML = weak;
        civics.innerHTML = weak + .2;
        math.innerHTML = weak + 4;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'physics' && value2 == 'maths2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML = weak + 4;
        history.innerHTML = weak - 2;
        geography.innerHTML = weak + 2;
        biology.innerHTML = weak;
        civics.innerHTML = weak + .2;
        math.innerHTML = midweak;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'physics' && value2 == 'english2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML = weak + 4;
        history.innerHTML = weak - 2;
        geography.innerHTML = weak + 2;
        biology.innerHTML = weak;
        civics.innerHTML = weak + .2;
        math.innerHTML = weak - 1.5;
        english.innerHTML = midweak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'physics' && value2 == 'biology2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML = weak + 4;
        history.innerHTML = weak - 2;
        geography.innerHTML = weak + 2;
        biology.innerHTML = midweak;
        civics.innerHTML = weak + .2;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'physics' && value2 == 'civics2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML = weak + 4;
        history.innerHTML = weak - 2;
        geography.innerHTML = weak + 2;
        biology.innerHTML = weak + .2;
        civics.innerHTML = midweak;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'physics' && value2 == 'history2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML = weak + 4;
        history.innerHTML = midweak;
        geography.innerHTML = weak + 2;
        biology.innerHTML = weak + .2;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'physics' && value2 == 'geography2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML = weak + 4;
        history.innerHTML =  weak + 2;
        geography.innerHTML = midweak;
        biology.innerHTML = weak + .2;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'chemistry' && value2 == 'physics2') {
        physics.innerHTML = midweak;
        chemistry.innerHTML = midgreat;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  weak + 4;
        biology.innerHTML = weak + .2;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'chemistry' && value2 == 'maths2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML = midgreat;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  weak + 4;
        biology.innerHTML = weak + .2;
        civics.innerHTML = weak - 2;
        math.innerHTML = midweak;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'chemistry' && value2 == 'english2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML = midgreat;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  weak + 4;
        biology.innerHTML = weak + .2;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak;
        english.innerHTML = midweak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'chemistry' && value2 == 'biology2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML = midgreat;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  weak + 4;
        biology.innerHTML = midweak;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak;
        english.innerHTML =  weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'chemistry' && value2 == 'civics2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML = midgreat;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  weak + 4;
        biology.innerHTML = weak - 2;
        civics.innerHTML = midweak;
        math.innerHTML = weak;
        english.innerHTML =  weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'chemistry' && value2 == 'history2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML = midgreat;
        history.innerHTML =  midweak;
        geography.innerHTML =  weak + 4;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 2;
        math.innerHTML = weak;
        english.innerHTML =  weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'chemistry' && value2 == 'geography2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML = midgreat;
        history.innerHTML =   weak + 4;
        geography.innerHTML = midweak;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 2;
        math.innerHTML = weak;
        english.innerHTML =  weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'maths' && value2 == 'physics2') {
        physics.innerHTML = midweak;
        chemistry.innerHTML = weak;
        history.innerHTML =   weak + 4;
        geography.innerHTML = weak - 1.5;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 2;
        math.innerHTML = midgreat;
        english.innerHTML =  weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'maths' && value2 == 'chemistry2') {
        physics.innerHTML = weak;
        chemistry.innerHTML = midweak;
        history.innerHTML =   weak + 4;
        geography.innerHTML = weak - 1.5;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 2;
        math.innerHTML = midgreat;
        english.innerHTML =  weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'maths' && value2 == 'english2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =   weak + 4;
        geography.innerHTML = weak - 1.5;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 2;
        math.innerHTML = midgreat;
        english.innerHTML = midweak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'maths' && value2 == 'biology2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =   weak + 4;
        geography.innerHTML = weak - 1.5;
        biology.innerHTML = midweak;
        civics.innerHTML = weak + 2;
        math.innerHTML = midgreat;
        english.innerHTML = weak - 2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'maths' && value2 == 'civics2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =   weak + 4;
        geography.innerHTML = weak - 1.5;
        biology.innerHTML = weak + 2;
        civics.innerHTML = midweak;
        math.innerHTML = midgreat;
        english.innerHTML = weak - 2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'maths' && value2 == 'history2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =   midweak;
        geography.innerHTML = weak - 1.5;
        biology.innerHTML = weak + 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = midgreat;
        english.innerHTML = weak - 2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'maths' && value2 == 'geography2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =   weak - 1.5;
        geography.innerHTML = midweak;
        biology.innerHTML = weak + 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = midgreat;
        english.innerHTML = weak - 2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'english' && value2 == 'physics2') {
        physics.innerHTML = midweak;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =   weak - 1.5;
        geography.innerHTML = weak;
        biology.innerHTML = weak + 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak - 2;
        english.innerHTML = midgreat;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'english' && value2 == 'chemistry2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  midweak;
        history.innerHTML =   weak - 1.5;
        geography.innerHTML = weak + .2;
        biology.innerHTML = weak + 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak - 2;
        english.innerHTML = midgreat;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'english' && value2 == 'maths2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak - 2;
        history.innerHTML =   weak - 1.5;
        geography.innerHTML = weak + .2;
        biology.innerHTML = weak + 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = midweak;
        english.innerHTML = midgreat;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'english' && value2 == 'biology2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak - 2;
        history.innerHTML =   weak - 1.5;
        geography.innerHTML = weak + .2;
        biology.innerHTML = midweak;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak + 2;
        english.innerHTML = midgreat;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'english' && value2 == 'civics2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak - 2;
        history.innerHTML =   weak - 1.5;
        geography.innerHTML = weak + .2;
        biology.innerHTML = weak + 4;
        civics.innerHTML = midweak;
        math.innerHTML = weak + 2;
        english.innerHTML = midgreat;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'english' && value2 == 'history2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak - 2;
        history.innerHTML =   midweak;
        geography.innerHTML = weak + .2;
        biology.innerHTML = weak + 4;
        civics.innerHTML = weak - 1.5;
        math.innerHTML = weak + 2;
        english.innerHTML = midgreat;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'english' && value2 == 'geography2') {
        physics.innerHTML = weak;
        chemistry.innerHTML =  weak - 2;
        history.innerHTML = weak + .2;
        geography.innerHTML = midweak;
        biology.innerHTML = weak + 4;
        civics.innerHTML = weak - 1.5;
        math.innerHTML = weak + 2;
        english.innerHTML = midgreat;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'biology' && value2 == 'physics2') {
        physics.innerHTML = midweak;
        chemistry.innerHTML =  weak - 2;
        history.innerHTML = weak + .2;
        geography.innerHTML = weak;
        biology.innerHTML = midgreat;
        civics.innerHTML = weak - 1.5;
        math.innerHTML = weak + 2;
        english.innerHTML = weak + 4;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'biology' && value2 == 'chemistry2') {
        physics.innerHTML = weak - 2;
        chemistry.innerHTML =  midweak;
        history.innerHTML = weak + .2;
        geography.innerHTML = weak;
        biology.innerHTML = midgreat;
        civics.innerHTML = weak - 1.5;
        math.innerHTML = weak + 2;
        english.innerHTML = weak + 4;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'biology' && value2 == 'maths2') {
        physics.innerHTML = weak - 2;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak + .2;
        geography.innerHTML = weak;
        biology.innerHTML = midgreat;
        civics.innerHTML = weak - 1.5;
        math.innerHTML = midweak;
        english.innerHTML = weak + 4;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'biology' && value2 == 'english2') {
        physics.innerHTML = weak - 2;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak + .2;
        geography.innerHTML = weak;
        biology.innerHTML = midgreat;
        civics.innerHTML = weak - 1.5;
        math.innerHTML = weak + 4;
        english.innerHTML = midweak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'biology' && value2 == 'civics2') {
        physics.innerHTML = weak - 2;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak + .2;
        geography.innerHTML = weak;
        biology.innerHTML = midgreat;
        civics.innerHTML = midweak;
        math.innerHTML = weak + 4;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'biology' && value2 == 'history2') {
        physics.innerHTML = weak - 2;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = midweak;
        geography.innerHTML = weak;
        biology.innerHTML = midgreat;
        civics.innerHTML = weak + .2;
        math.innerHTML = weak + 4;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'biology' && value2 == 'geography2') {
        physics.innerHTML = weak - 2;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak;
        geography.innerHTML = midweak;
        biology.innerHTML = midgreat;
        civics.innerHTML = weak + .2;
        math.innerHTML = weak + 4;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }
    if (med.checked == true && value1 == 'civics' && value2 == 'physics2') {
        physics.innerHTML = midweak;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak;
        geography.innerHTML = weak - 2;
        biology.innerHTML = weak + .2;
        civics.innerHTML = midgreat;
        math.innerHTML = weak + 4;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'civics' && value2 == 'chemistry2') {
        physics.innerHTML =  weak + 2;
        chemistry.innerHTML = midweak;
        history.innerHTML = weak;
        geography.innerHTML =  weak - 2;
        biology.innerHTML = weak + .2;
        civics.innerHTML = midgreat;
        math.innerHTML = weak + 4;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'civics' && value2 == 'maths2') {
        physics.innerHTML =  weak + 4;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak;
        geography.innerHTML =  weak - 2;
        biology.innerHTML = weak + .2;
        civics.innerHTML = midgreat;
        math.innerHTML = midweak;
        english.innerHTML = weak - 1.5;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'civics' && value2 == 'english2') {
        physics.innerHTML =  weak + 4;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak;
        geography.innerHTML =  weak - 2;
        biology.innerHTML = weak + .2;
        civics.innerHTML = midgreat;
        math.innerHTML = weak - 1.5;
        english.innerHTML = midweak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'civics' && value2 == 'biology2') {
        physics.innerHTML =  weak + 4;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak;
        geography.innerHTML =  weak - 2;
        biology.innerHTML = midweak;
        civics.innerHTML = midgreat;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'civics' && value2 == 'history2') {
        physics.innerHTML =  weak + 4;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = midweak;
        geography.innerHTML =  weak - 2;
        biology.innerHTML = weak;
        civics.innerHTML = midgreat;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'civics' && value2 == 'geography2') {
        physics.innerHTML =  weak + 4;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = weak - 2;
        geography.innerHTML =  midweak;
        biology.innerHTML = weak;
        civics.innerHTML = midgreat;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    }  
    if (med.checked == true && value1 == 'history' && value2 == 'physics2') {
        physics.innerHTML = midweak;
        chemistry.innerHTML = weak + 2;
        history.innerHTML = midgreat;
        geography.innerHTML =   weak + 4;
        biology.innerHTML = weak;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'history' && value2 == 'chemistry2') {
        physics.innerHTML = weak + 2;
        chemistry.innerHTML = midweak;
        history.innerHTML = midgreat;
        geography.innerHTML =   weak + 4;
        biology.innerHTML = weak;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak - 1.5;
        english.innerHTML = weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'history' && value2 == 'maths2') {
        physics.innerHTML = weak + 2;
        chemistry.innerHTML =  weak - 1.5;
        history.innerHTML = midgreat;
        geography.innerHTML =   weak + 4;
        biology.innerHTML = weak;
        civics.innerHTML = weak - 2;
        math.innerHTML = midweak;
        english.innerHTML = weak + .2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'history' && value2 == 'english2') {
        physics.innerHTML = weak + 2;
        chemistry.innerHTML =  weak - 1.5;
        history.innerHTML = midgreat;
        geography.innerHTML =   weak + 4;
        biology.innerHTML = weak;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak + .2;
        english.innerHTML = midweak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'history' && value2 == 'biology2') {
        physics.innerHTML = weak + 2;
        chemistry.innerHTML =  weak - 1.5;
        history.innerHTML = midgreat;
        geography.innerHTML =   weak + 4;
        biology.innerHTML = midweak;
        civics.innerHTML = weak - 2;
        math.innerHTML = weak + .2;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'history' && value2 == 'civics2') {
        physics.innerHTML = weak + 2;
        chemistry.innerHTML =  weak - 1.5;
        history.innerHTML = midgreat;
        geography.innerHTML =   weak + 4;
        biology.innerHTML = weak - 2;
        civics.innerHTML = midweak;
        math.innerHTML = weak + .2;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'history' && value2 == 'geography2') {
        physics.innerHTML = weak + 2;
        chemistry.innerHTML =  weak - 1.5;
        history.innerHTML = midgreat;
        geography.innerHTML =   midweak;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak + .2;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'geography' && value2 == 'physics2') {
        physics.innerHTML = midweak;
        chemistry.innerHTML =  weak - 1.5;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  midgreat;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak + .2;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'geography' && value2 == 'chemistry2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML =  midweak;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  midgreat;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak + .2;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'geography' && value2 == 'maths2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  midgreat;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = midweak;
        english.innerHTML = weak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'geography' && value2 == 'english2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  midgreat;
        biology.innerHTML = weak - 2;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak;
        english.innerHTML = midweak;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'geography' && value2 == 'biology2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  midgreat;
        biology.innerHTML = midweak;
        civics.innerHTML = weak + 4;
        math.innerHTML = weak;
        english.innerHTML = weak - 2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'geography' && value2 == 'civics2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =  weak + 2;
        geography.innerHTML =  midgreat;
        biology.innerHTML = weak + 4;
        civics.innerHTML = midweak;
        math.innerHTML = weak;
        english.innerHTML = weak - 2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (med.checked == true && value1 == 'geography' && value2 == 'history2') {
        physics.innerHTML = weak - 1.5;
        chemistry.innerHTML =  weak + .2;
        history.innerHTML =  midweak;
        geography.innerHTML =  midgreat;
        biology.innerHTML = weak + 4;
        civics.innerHTML = weak + 2;
        math.innerHTML = weak;
        english.innerHTML = weak - 2;
        sums.innerHTML = (midgreat + midweak + weak - 2 + weak + 2 + weak +  weak + .2 + weak + 4 + weak - 1.5) / 8;
    } 
    if (lazy.checked == true && value1 == 'physics' && value2 == 'chemistry2') {
        physics.innerHTML = midgreat;
        chemistry.innerHTML =  lazyweak;
        history.innerHTML =  midweak;
        geography.innerHTML = midweak + .2;
        biology.innerHTML = midweak + 4;
        civics.innerHTML = midweak + 2;
        math.innerHTML = midweak + 1;
        english.innerHTML = midweak - 2;
        sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;

    } 

if (lazy.checked == true && value1 == 'physics' && value2 == 'maths2') {
    physics.innerHTML = midgreat;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML =  midweak;
    geography.innerHTML = midweak + .2;
    biology.innerHTML = midweak + 4;
    civics.innerHTML = midweak + 2;
    math.innerHTML = lazyweak;
    english.innerHTML = midweak - 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
} 
if (lazy.checked == true && value1 == 'physics' && value2 == 'english2') {
    physics.innerHTML = midgreat;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML =  midweak;
    geography.innerHTML = midweak + .2;
    biology.innerHTML = midweak + 4;
    civics.innerHTML = midweak + 2;
    math.innerHTML = midweak - 2;
    english.innerHTML = lazyweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
} 
if (lazy.checked == true && value1 == 'physics' && value2 == 'biology2') {
    physics.innerHTML = midgreat;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML =  midweak;
    geography.innerHTML = midweak + .2;
    biology.innerHTML = lazyweak;
    civics.innerHTML = midweak + 2;
    math.innerHTML = midweak - 2;
    english.innerHTML = midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
} 
if (lazy.checked == true && value1 == 'physics' && value2 == 'civics2') {
    physics.innerHTML = midgreat;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML =  midweak;
    geography.innerHTML = midweak + .2;
    biology.innerHTML =  midweak + 2;
    civics.innerHTML = lazyweak;
    math.innerHTML = midweak - 2;
    english.innerHTML = midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
} 
if (lazy.checked == true && value1 == 'physics' && value2 == 'history2') {
    physics.innerHTML = midgreat;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML =  lazyweak;
    geography.innerHTML = midweak + .2;
    biology.innerHTML =  midweak + 2;
    civics.innerHTML = midweak;
    math.innerHTML = midweak - 2;
    english.innerHTML = midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'physics' && value2 == 'geography2') {
    physics.innerHTML = midgreat;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML =  midweak + .2;
    geography.innerHTML = lazyweak;
    biology.innerHTML =  midweak + 2;
    civics.innerHTML = midweak;
    math.innerHTML = midweak - 2;
    english.innerHTML = midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'chemistry' && value2 == 'physics2') {
    physics.innerHTML = lazyweak;
    chemistry.innerHTML =  midgreat;
    history.innerHTML =  midweak + .2;
    geography.innerHTML =  midweak + 1;
    biology.innerHTML =  midweak + 2;
    civics.innerHTML = midweak;
    math.innerHTML = midweak - 2;
    english.innerHTML = midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'chemistry' && value2 == 'maths2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =  midgreat;
    history.innerHTML =  midweak + .2;
    geography.innerHTML = midweak - 2;
    biology.innerHTML =  midweak + 2;
    civics.innerHTML = midweak;
    math.innerHTML = lazyweak;
    english.innerHTML = midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'chemistry' && value2 == 'english2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =  midgreat;
    history.innerHTML =  midweak + .2;
    geography.innerHTML = midweak - 2;
    biology.innerHTML =  midweak + 2;
    civics.innerHTML = midweak;
    math.innerHTML = midweak + 4;
    english.innerHTML = lazyweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'chemistry' && value2 == 'biology2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =  midgreat;
    history.innerHTML =  midweak + .2;
    geography.innerHTML = midweak - 2;
    biology.innerHTML =  lazyweak;
    civics.innerHTML = midweak;
    math.innerHTML = midweak + 4;
    english.innerHTML = midweak + 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'chemistry' && value2 == 'civics2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =  midgreat;
    history.innerHTML =  midweak + .2;
    geography.innerHTML = midweak - 2;
    biology.innerHTML =  midweak;
    civics.innerHTML = lazyweak;
    math.innerHTML = midweak + 4;
    english.innerHTML = midweak + 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'chemistry' && value2 == 'history2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =  midgreat;
    history.innerHTML = lazyweak;
    geography.innerHTML = midweak - 2;
    biology.innerHTML =  midweak;
    civics.innerHTML =  midweak + .2;
    math.innerHTML = midweak + 4;
    english.innerHTML = midweak + 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'chemistry' && value2 == 'geography2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =  midgreat;
    history.innerHTML =  midweak - 2;
    geography.innerHTML = lazyweak;
    biology.innerHTML =  midweak;
    civics.innerHTML =  midweak + .2;
    math.innerHTML = midweak + 4;
    english.innerHTML = midweak + 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'maths' && value2 == 'physics2') {
    physics.innerHTML = lazyweak;
    chemistry.innerHTML =   midweak + 4;
    history.innerHTML =  midweak - 2;
    geography.innerHTML = midweak + 1;
    biology.innerHTML =  midweak;
    civics.innerHTML =  midweak + .2;
    math.innerHTML = midgreat;
    english.innerHTML = midweak + 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'maths' && value2 == 'chemistry2') {
    physics.innerHTML =  midweak + 4;
    chemistry.innerHTML =  lazyweak;
    history.innerHTML =  midweak - 2;
    geography.innerHTML = midweak + 1;
    biology.innerHTML =  midweak;
    civics.innerHTML =  midweak + .2;
    math.innerHTML = midgreat;
    english.innerHTML = midweak + 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'maths' && value2 == 'english2') {
    physics.innerHTML =  midweak + 4;
    chemistry.innerHTML =  midweak + 2;
    history.innerHTML =  midweak - 2;
    geography.innerHTML = midweak + 1;
    biology.innerHTML =  midweak;
    civics.innerHTML =  midweak + .2;
    math.innerHTML = midgreat;
    english.innerHTML = lazyweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'maths' && value2 == 'biology2') {
    physics.innerHTML =  midweak + 4;
    chemistry.innerHTML =  midweak + 2;
    history.innerHTML =  midweak - 2;
    geography.innerHTML = midweak + 1;
    biology.innerHTML = lazyweak;
    civics.innerHTML =  midweak + .2;
    math.innerHTML = midgreat;
    english.innerHTML = midweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'maths' && value2 == 'civics2') {
    physics.innerHTML =  midweak + 4;
    chemistry.innerHTML =  midweak + 2;
    history.innerHTML =  midweak - 2;
    geography.innerHTML = midweak + 1;
    biology.innerHTML = midweak + .2;
    civics.innerHTML =  lazyweak;
    math.innerHTML = midgreat;
    english.innerHTML = midweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'maths' && value2 == 'history2') {
    physics.innerHTML =  midweak + 4;
    chemistry.innerHTML =  midweak + 2;
    history.innerHTML =  lazyweak;
    geography.innerHTML = midweak + 1;
    biology.innerHTML = midweak + .2;
    civics.innerHTML = midweak - 2;
    math.innerHTML = midgreat;
    english.innerHTML = midweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'maths' && value2 == 'geography2') {
    physics.innerHTML =  midweak + 4;
    chemistry.innerHTML =  midweak + 2;
    history.innerHTML =  midweak + 1;
    geography.innerHTML = lazyweak;
    biology.innerHTML = midweak + .2;
    civics.innerHTML = midweak - 2;
    math.innerHTML = midgreat;
    english.innerHTML = midweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
if (lazy.checked == true && value1 == 'english' && value2 == 'physics2') {
    physics.innerHTML = lazyweak;
    chemistry.innerHTML =  midweak + 2;
    history.innerHTML =  midweak + 1;
    geography.innerHTML = midweak;
    biology.innerHTML = midweak + .2;
    civics.innerHTML = midweak - 2;
    math.innerHTML =  midweak + 4;
    english.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
     
}
 if (lazy.checked == true && value1 == 'english' && value2 == 'chemistry2') {
    physics.innerHTML = midweak + 2;
    chemistry.innerHTML =  lazyweak;
    history.innerHTML =  midweak + 1;
    geography.innerHTML = midweak;
    biology.innerHTML = midweak + .2;
    civics.innerHTML = midweak - 2;
    math.innerHTML =  midweak + 4;
    english.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
    
}
if (lazy.checked == true && value1 == 'english' && value2 == 'maths2') {
    physics.innerHTML = midweak + 2;
    chemistry.innerHTML =   midweak + 4;
    history.innerHTML =  midweak + 1;
    geography.innerHTML = midweak;
    biology.innerHTML = midweak + .2;
    civics.innerHTML = midweak - 2;
    math.innerHTML = lazyweak;
    english.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'english' && value2 == 'biology2') {
    physics.innerHTML = midweak + 2;
    chemistry.innerHTML =   midweak + 4;
    history.innerHTML =  midweak + 1;
    geography.innerHTML = midweak;
    biology.innerHTML = lazyweak;
    civics.innerHTML = midweak - 2;
    math.innerHTML = midweak + .2;
    english.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'english' && value2 == 'civics2') {
    physics.innerHTML = midweak + 2;
    chemistry.innerHTML =   midweak + 4;
    history.innerHTML =  midweak + 1;
    geography.innerHTML = midweak;
    biology.innerHTML = midweak - 2;
    civics.innerHTML = lazyweak;
    math.innerHTML = midweak + .2;
    english.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'english' && value2 == 'history2') {
    physics.innerHTML = midweak + 2;
    chemistry.innerHTML =   midweak + 4;
    history.innerHTML = lazyweak;
    geography.innerHTML = midweak;
    biology.innerHTML = midweak - 2;
    civics.innerHTML =  midweak + 1;
    math.innerHTML = midweak + .2;
    english.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'english' && value2 == 'geography2') {
    physics.innerHTML = midweak + 2;
    chemistry.innerHTML =   midweak + 4;
    history.innerHTML = midweak;
    geography.innerHTML = lazyweak;
    biology.innerHTML = midweak - 2;
    civics.innerHTML =  midweak + 1;
    math.innerHTML = midweak + .2;
    english.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'biology' && value2 == 'physics2') {
    physics.innerHTML = lazyweak;
    chemistry.innerHTML =   midweak + 4;
    history.innerHTML = midweak;
    geography.innerHTML = midweak + 2;
    biology.innerHTML = midgreat;
    civics.innerHTML =  midweak + 1;
    math.innerHTML = midweak + .2;
    english.innerHTML = midweak - 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'biology' && value2 == 'chemistry2') {
    physics.innerHTML = midweak + 4;
    chemistry.innerHTML = lazyweak;
    history.innerHTML = midweak;
    geography.innerHTML = midweak + 2;
    biology.innerHTML = midgreat;
    civics.innerHTML =  midweak + 1;
    math.innerHTML = midweak + .2;
    english.innerHTML = midweak - 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'biology' && value2 == 'maths2') {
    physics.innerHTML = midweak + 4;
    chemistry.innerHTML =  midweak + .2;
    history.innerHTML = midweak;
    geography.innerHTML = midweak + 2;
    biology.innerHTML = midgreat;
    civics.innerHTML =  midweak + 1;
    math.innerHTML = lazyweak;
    english.innerHTML = midweak - 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'biology' && value2 == 'english2') {
    physics.innerHTML = midweak + 4;
    chemistry.innerHTML =  midweak + .2;
    history.innerHTML = midweak;
    geography.innerHTML = midweak + 2;
    biology.innerHTML = midgreat;
    civics.innerHTML =  midweak + 1;
    math.innerHTML = midweak - 2;
    english.innerHTML = lazyweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'biology' && value2 == 'civics2') {
    physics.innerHTML = midweak + 4;
    chemistry.innerHTML =  midweak + .2;
    history.innerHTML = midweak;
    geography.innerHTML = midweak + 2;
    biology.innerHTML = midgreat;
    civics.innerHTML = lazyweak;
    math.innerHTML = midweak - 2;
    english.innerHTML =  midweak + 1;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'biology' && value2 == 'history2') {
    physics.innerHTML = midweak + 4;
    chemistry.innerHTML =  midweak + .2;
    history.innerHTML = lazyweak;
    geography.innerHTML = midweak + 2;
    biology.innerHTML = midgreat;
    civics.innerHTML = midweak;
    math.innerHTML = midweak - 2;
    english.innerHTML =  midweak + 1;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'biology' && value2 == 'geography2') {
    physics.innerHTML = midweak + 4;
    chemistry.innerHTML =  midweak + .2;
    history.innerHTML = midweak + 2;
    geography.innerHTML = lazyweak;
    biology.innerHTML = midgreat;
    civics.innerHTML = midweak;
    math.innerHTML = midweak - 2;
    english.innerHTML =  midweak + 1;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'civics' && value2 == 'physics2') {
    physics.innerHTML = lazyweak;
    chemistry.innerHTML =  midweak + .2;
    history.innerHTML = midweak + 2;
    geography.innerHTML = midweak + 4;
    biology.innerHTML = midweak;
    civics.innerHTML = midgreat;
    math.innerHTML = midweak - 2;
    english.innerHTML =  midweak + 1;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'civics' && value2 == 'chemistry2') {
    physics.innerHTML = midweak + .2;
    chemistry.innerHTML =  lazyweak;
    history.innerHTML = midweak + 2;
    geography.innerHTML = midweak + 4;
    biology.innerHTML = midweak;
    civics.innerHTML = midgreat;
    math.innerHTML = midweak - 2;
    english.innerHTML =  midweak + 1;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'civics' && value2 == 'maths2') {
    physics.innerHTML = midweak + .2;
    chemistry.innerHTML =  midweak - 2;
    history.innerHTML = midweak + 2;
    geography.innerHTML = midweak + 4;
    biology.innerHTML = midweak;
    math.innerHTML = lazyweak;
    civics.innerHTML = midgreat;
    english.innerHTML =  midweak + 1;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'civics' && value2 == 'english2') {
    physics.innerHTML = midweak + .2;
    chemistry.innerHTML =  midweak - 2;
    history.innerHTML = midweak + 2;
    geography.innerHTML = midweak + 4;
    biology.innerHTML = midweak;
    math.innerHTML = midweak + 1;
    civics.innerHTML = midgreat;
    english.innerHTML =  lazyweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'civics' && value2 == 'biology2') {
    physics.innerHTML = midweak + .2;
    chemistry.innerHTML =  midweak - 2;
    history.innerHTML = midweak + 2;
    geography.innerHTML = midweak + 4;
    biology.innerHTML = midweak;
    math.innerHTML = midweak + 1;
    english.innerHTML =  lazyweak;
    civics.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'civics' && value2 == 'history2') {
    physics.innerHTML = midweak + .2;
    chemistry.innerHTML =  midweak - 2;
    history.innerHTML = lazyweak;
    geography.innerHTML = midweak + 4;
    biology.innerHTML = midweak;
    math.innerHTML = midweak + 1;
    english.innerHTML =   midweak + 2;
    civics.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'civics' && value2 == 'geography2') {
    physics.innerHTML = midweak + .2;
    chemistry.innerHTML =  midweak - 2;
    history.innerHTML = midweak + 4;
    geography.innerHTML = lazyweak;
    biology.innerHTML = midweak;
    math.innerHTML = midweak + 1;
    english.innerHTML =   midweak + 2;
    civics.innerHTML = midgreat;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'history' && value2 == 'physics2') {
    physics.innerHTML = lazyweak;
    chemistry.innerHTML =  midweak - 2;
    history.innerHTML = midgreat;
    geography.innerHTML =  midweak + .2;
    biology.innerHTML = midweak;
    math.innerHTML = midweak + 1;
    english.innerHTML =   midweak + 2;
    civics.innerHTML =  midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'history' && value2 == 'chemistry2') {
    physics.innerHTML = midweak - 2;
    chemistry.innerHTML =  lazyweak;
    history.innerHTML = midgreat;
    geography.innerHTML =  midweak + .2;
    biology.innerHTML = midweak;
    math.innerHTML = midweak + 1;
    english.innerHTML =   midweak + 2;
    civics.innerHTML =  midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'history' && value2 == 'maths2') {
    physics.innerHTML = midweak - 2;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML = midgreat;
    geography.innerHTML =  midweak + .2;
    biology.innerHTML = midweak;
    math.innerHTML = lazyweak;
    english.innerHTML =   midweak + 2;
    civics.innerHTML =  midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'history' && value2 == 'english2') {
    physics.innerHTML = midweak - 2;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML = midgreat;
    geography.innerHTML =  midweak + .2;
    biology.innerHTML = midweak;
    math.innerHTML =  midweak + 2;
    english.innerHTML =  lazyweak;
    civics.innerHTML =  midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'history' && value2 == 'biology2') {
    physics.innerHTML = midweak - 2;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML = midgreat;
    geography.innerHTML =  midweak + .2;
    biology.innerHTML = lazyweak;
    math.innerHTML =  midweak + 2;
    english.innerHTML =  midweak;
    civics.innerHTML =  midweak + 4;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'history' && value2 == 'civics2') {
    physics.innerHTML = midweak - 2;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML = midgreat;
    geography.innerHTML =  midweak + .2;
    biology.innerHTML = midweak + 4;
    math.innerHTML =  midweak + 2;
    english.innerHTML =  midweak;
    civics.innerHTML =  lazyweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'history' && value2 == 'geography2') {
    physics.innerHTML = midweak - 2;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML = midgreat;
    geography.innerHTML =  lazyweak;
    biology.innerHTML = midweak + 4;
    math.innerHTML =  midweak + 2;
    english.innerHTML =  midweak;
    civics.innerHTML = midweak + .2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'geography' && value2 == 'physics2') {
    physics.innerHTML = lazyweak;
    chemistry.innerHTML =  midweak + 1;
    history.innerHTML = midweak - 2;
    geography.innerHTML =  midgreat;
    biology.innerHTML = midweak + 4;
    math.innerHTML =  midweak + 2;
    english.innerHTML =  midweak;
    civics.innerHTML = midweak + .2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'geography' && value2 == 'chemistry2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =  lazyweak;
    history.innerHTML = midweak - 2;
    geography.innerHTML =  midgreat;
    biology.innerHTML = midweak + 4;
    math.innerHTML =  midweak + 2;
    english.innerHTML =  midweak;
    civics.innerHTML = midweak + .2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'geography' && value2 == 'maths2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =   midweak + 2;
    history.innerHTML = midweak - 2;
    geography.innerHTML =  midgreat;
    biology.innerHTML = midweak + 4;
    math.innerHTML = lazyweak;
    english.innerHTML =  midweak;
    civics.innerHTML = midweak + .2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'geography' && value2 == 'english2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =   midweak + 2;
    history.innerHTML = midweak - 2;
    geography.innerHTML =  midgreat;
    biology.innerHTML = midweak + 4;
    math.innerHTML =  midweak;
    english.innerHTML = lazyweak;
    civics.innerHTML = midweak + .2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'geography' && value2 == 'biology2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =   midweak + 2;
    history.innerHTML = midweak - 2;
    geography.innerHTML =  midgreat;
    biology.innerHTML = lazyweak;
    math.innerHTML =  midweak;
    english.innerHTML = midweak + 4;
    civics.innerHTML = midweak + .2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'geography' && value2 == 'civics2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =   midweak + 2;
    history.innerHTML = midweak - 2;
    geography.innerHTML =  midgreat;
    biology.innerHTML = midweak + .2;
    math.innerHTML =  midweak;
    english.innerHTML = midweak + 4;
    civics.innerHTML = lazyweak;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}
if (lazy.checked == true && value1 == 'geography' && value2 == 'history2') {
    physics.innerHTML = midweak + 1;
    chemistry.innerHTML =   midweak + 2;
    history.innerHTML = lazyweak;
    geography.innerHTML =  midgreat;
    biology.innerHTML = midweak + .2;
    math.innerHTML =  midweak;
    english.innerHTML = midweak + 4;
    civics.innerHTML =  midweak - 2;
    sums.innerHTML = (midgreat + lazyweak + midweak + midweak + .2 + midweak + 4 + midweak + 2 + midweak + 1 + midweak - 2) / 8;
  
}  
 
}
