

    function appendValue(value) {
        
        var display = document.getElementById('display');
        display.value += value;
    }

    function iresValue(value) {
        
        var display = document.getElementById('display');
        display.value = value;
    }

    function deleteValue() {
        
        var display = document.getElementById('display');
        display.value = display.value.toString().slice(0,-1);
    }

    function ansValue() {
        
        var display = document.getElementById('display');
        display.value = eval(display.value);
    }

    