const config = {
    columns: 24,
    minScreenPx: 300,
    extraSmallScreenPx: 300,
    smallScreenPx: 576,
    mediumScreenPx: 768,
    largeScreenPx: 992,
    extraLargeScreenPx: 1200,
    colGapPx: 2,
    colPaddingPx: 7,
}

console.log(`
/*========== VARIABLES ==========*/
:root {
    --columns: ${config.columns};
    --min-screen: ${config.minScreenPx}px;
    --extra-small-screen: ${config.extraSmallScreenPx}px;
    --small-screen: ${config.smallScreenPx}px;
    --medium-screen: ${config.mediumScreenPx}px;
    --large-screen: ${config.largeScreenPx}px;
    --extra-large-screen: ${config.extraLargeScreenPx}px;
    --col-gap: ${config.colGapPx}px;
    --col-padding: ${config.colPaddingPx}px;
}
`)

console.log(`
/*========== STRUCTURE ==========*/
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Container styles */
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: var(--col-gap);
    flex-grow: 1;
    justify-content:center;
  }
  .container > .row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--col-gap);
    flex-grow: 1;
  }
  .container > .row.fluid {
    max-width: 100%;
    width: 100%;
    background-color: #00F;
    gap: 0;
    padding: 0;
  }

  .row [class^="col"] {
  padding:var(--col-padding); 
  overflow: hidden;
  }
`)

for (let i = 1; i <= config.columns; i++) {
    console.log(`.col${i} { flex-basis: calc(100% / var(--columns) * ${i}); }`)
}

console.log(``)
const screenBreaks = [
    // [0, config.minScreenPx-1],
    // [config.minScreenPx, config.extraSmallScreenPx-1],
    [config.extraSmallScreenPx, config.smallScreenPx - 1],
    [config.smallScreenPx, config.mediumScreenPx - 1],
    [config.mediumScreenPx, config.largeScreenPx - 1],
    [config.largeScreenPx, config.extraLargeScreenPx - 1],
    [config.extraLargeScreenPx, 10000],
]; ``

console.log(`body{ min-width: ${config.minScreenPx}px}`)

screenBreaks.map(screenBreak => {
    console.log(`@media screen and (min-width: ${screenBreak[0]}px) and (max-width: ${screenBreak[1]}px) {`)
    console.log(`   .row { padding-left: calc((100% - ${screenBreak[0]}px)/2); padding-right: calc((100% - ${screenBreak[0]}px)/2); }`)

    for (let i = 1; i <= config.columns; i++) {
        let value = Math.floor(screenBreak[0] / (config.columns / i) - config.colGapPx);
            console.log(`   .col${i} { flex-basis: ${value}px; }`)
    }
    for (let i = 1; i <= config.columns; i++) {
        if (config.columns % i === 0) {
            console.log(`   .fluid .col${i} { flex-basis: calc(100% / ${(config.columns / i)}); }`)
        }
    }

    if (screenBreak[0] >= config.extraSmallScreenPx) {
        for (let i = config.columns; i >= 1; i--) {
            let value = Math.floor(screenBreak[0] / (config.columns / i) - config.colGapPx);
            console.log(`   .col-xs-${i} { flex-basis: ${value}px; }`)
        }
    }

    if (screenBreak[0] >= config.smallScreenPx) {
        for (let i = config.columns; i >= 1; i--) {
            let value = Math.floor(screenBreak[0] / (config.columns / i) - config.colGapPx);
            console.log(`   .col-s-${i} { flex-basis: ${value}px; }`)
        }
    }

    if (screenBreak[0] >= config.mediumScreenPx) {
        for (let i = config.columns; i >= 1; i--) {
            let value = Math.floor(screenBreak[0] / (config.columns / i) - config.colGapPx);
            console.log(`   .col-m-${i} { flex-basis: ${value}px; }`)
        }
    }
    if (screenBreak[0] >= config.largeScreenPx) {
        for (let i = config.columns; i >= 1; i--) {
            let value = Math.floor(screenBreak[0] / (config.columns / i) - config.colGapPx);
            console.log(`   .col-l-${i} { flex-basis: ${value}px; }`)
        }
    }
    if (screenBreak[0] >= config.extraLargeScreenPx) {
        for (let i = config.columns; i >= 1; i--) {
            let value = Math.floor(screenBreak[0] / (config.columns / i) - config.colGapPx);
            console.log(`   .col-xl-${i} { flex-basis: ${value}px; }`)
        }
    }
    console.log(`}`)
    console.log(``)
})
