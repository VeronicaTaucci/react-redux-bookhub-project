<div class="range-slider" style='--min:0; --max:100; --step:5; --value:75; --text-value:"75";'>
    <input type="range" min="0" max="100" step="5" value="75" oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))">
        <output></output>
        <div class='range-slider__progress'></div>
</div>