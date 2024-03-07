<script setup>
import { onMounted, ref } from 'vue';
import SVGIcon from './SVGIcon.vue'

const hexasRef = ref(null);

onMounted(() => {
  const hexas = hexasRef.value ? hexasRef.value.querySelectorAll('.hexagons span div') : [];
  let lastTwoIndexes = [-1, -2]; // Startwerte, die sicherstellen, dass kein Index ausgeschlossen ist

  const blinkRandomHexa = () => {
    let index;
    do {
      index = Math.floor(Math.random() * hexas.length);
    } while (lastTwoIndexes.includes(index)); // Wiederhole, bis ein Index gefunden wird, der nicht in den letzten Zwei ist

    // Aktualisiere die Liste der letzten zwei Indizes
    lastTwoIndexes = [lastTwoIndexes[1], index];

    hexas[index].classList.add('blink');
    setTimeout(() => hexas[index].classList.remove('blink'), 1500); // Entferne die Klasse nach der Animation

    setTimeout(blinkRandomHexa, 1000); // Setze die Zeit zwischen den Blink-Effekten
  };

  blinkRandomHexa(); // Starte den Blink-Prozess
});
</script>

<template>
    <div id="canvas-container" ref="hexasRef" class="md:block hidden">
  <div class="hexagon-wrap">
    <section class="flex  justify-end gap-1 *:gap-1' -mr-5 -mt-7">
      <div class="hexagons flex flex-col *:items-center *:justify-center">
        <span class="hexa et1"><SVGIcon name="github" /></span>
      </div>
      <div class="hexagons flex flex-col">
          <span class="hexa et1"><SVGIcon name="javascript" /></span>
          <span class="hexa"><SVGIcon name="mysql" /></span>
      </div>
      <div class="hexagons flex flex-col">
        <span class="hexa"><SVGIcon name="php" /></span>
        <span class="hexa"><SVGIcon name="vue" /></span>
        <span class="hexa"><SVGIcon name="woocommerce" /></span>
      </div>

      <div class="hexagons flex flex-col">
        <span class="hexa"><SVGIcon name="vscode" /></span>
        <span class="hexa"><SVGIcon name="laravel" /></span>
        <span class="hexa"><SVGIcon name="statamic" /></span>
      </div>

      <div class="hexagons flex flex-col">
        <span class="hexa"><SVGIcon name="tailwind" /></span>
        <span class="hexa"><SVGIcon name="wordpress" /></span>
        <span class="hexa"><SVGIcon name="npm" /></span>
      </div>
    </section>
    </div>
    </div>
</template>
    

<style>
:root {
  --w: 5.3rem;
  --mb: 0.16rem;
  --blue: #3b86c3;
  --blue2:rgb(27, 82, 127);
}

.hexagon-wrap {
  height: calc(var(--w) * 3 - var(--mb));
  position: relative;
  overflow: hidden;
  background-color: var(--blue);
  border-radius: 0 0 1rem 1rem;

}

.hexa {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
}


.hexa svg {
  margin: 1.2rem;
  fill: var(--blue);
}

.hexagons {
  width: var(--w);
  margin-bottom: 0.1rem;
}

.hexagons:nth-child(odd) {
  margin-top: calc(var(--w) / 2);
}

.hexagons:nth-child(4) span {
  margin-left: calc(var(--w) * 0.26);
}

.hexagons:nth-child(3) span {
  margin-left: calc(var(--w) * 0.52);
}

.hexagons:nth-child(2) span {
  margin-left: calc(var(--w) * 0.78);
}

.hexagons:nth-child(1) span {
  margin-left: calc(var(--w) * 1.04);
}

.hexagons span {
  position: relative;
  margin: 0rem;
  margin-bottom: var(--mb);
  height: calc(var(--w) - var(--mb));
  width: var(--w);
}

.hexagons span {
  z-index: 99999;
}

.hexagons span div {
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--w) - var(--mb));
  width: var(--w);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  z-index: 100;
  transition: all 1s;
}


.hexagons span div:hover svg{
    fill: var(--blue2);
    filter: drop-shadow(2px, 2px, 2px, #000)
}



.hexagons .et1 {
  margin-top: calc(var(--w));
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


@keyframes blink {
  0%, 100% { 
    transform: scale(1);
   }
  50% { 
    transform: scale(1.1);
    background: rgba(255, 255, 255, 1);
  }
}

.blink {
  animation: blink 1.125s ease-in-out;
}
</style>