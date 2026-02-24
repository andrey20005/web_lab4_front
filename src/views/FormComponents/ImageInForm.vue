<script setup>
import { ref, computed } from 'vue'
import { usePointsStore } from '@/stores/pointsStore'
const pointsStore = usePointsStore()
const svgRef = ref(null)

const pointColor = computed(() => {
    if (pointsStore.error) return "black"
    if (pointsStore.created) return pointsStore.created.hit ? "green" : "red"
    return "black"
})

function clickSvg(event) {
    if (!svgRef.value) return

    const point = new DOMPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    const svgPoint = point.matrixTransform(svgRef.value.getScreenCTM().inverse());

    pointsStore.newPoint.x = svgPoint.x * pointsStore.newPoint.r
    pointsStore.newPoint.y = -svgPoint.y * pointsStore.newPoint.r

    pointsStore.addPoint()
}
</script>

<template>
    <svg ref="svgRef"
         @click="clickSvg"
         class="my_swg" 
         xmlns="http://www.w3.org/2000/svg" 
         viewBox="-1.3 -1.3 2.6 2.6">
        <rect fill="#ffffff"
                width="2.6" height="2.6"
                x="-1.3" y="-1.3"/>
        <rect fill="#6399f7"
                width="0.5" height="1"
                x="-0.5" y="0"/>
        <path d="M 0 0 L 0 -0.5 A 0.5 0.5 0 0 0 -0.5 0 Z" fill="#6399f7"/>
        <polygon fill="#6399f7" points="0,0 0.5,0, 0,0.5"/>
        <line stroke="black" stroke-width="0.011"
                x1="-1.15" y1="0"
                x2="1.15" y2="0"/>
        <line stroke="black" stroke-width="0.011"
                x1="0" y1="-1.15"
                x2="0" y2="1.15"/>

        <line stroke="black" stroke-width="0.011"
                x1="1" y1="-0.02"
                x2="1" y2="0.02"/>
        <line stroke="black" stroke-width="0.011"
                x1="0.5" y1="-0.02"
                x2="0.5" y2="0.02"/>
        <line stroke="black" stroke-width="0.011"
                x1="-0.5" y1="-0.02"
                x2="-0.5" y2="0.02"/>
        <line stroke="black" stroke-width="0.011"
                x1="-1" y1="-0.02"
                x2="-1" y2="0.02"/>
        <line stroke="black" stroke-width="0.011"
                x1="-0.02" y1="1"
                x2="0.02" y2="1"/>
        <line stroke="black" stroke-width="0.011"
                x1="-0.02" y1="0.5"
                x2="0.02" y2="0.5"/>
        <line stroke="black" stroke-width="0.011"
                x1="-0.02" y1="-0.5"
                x2="0.02" y2="-0.5"/>
        <line stroke="black" stroke-width="0.011"
                x1="-0.02" y1="-1"
                x2="0.02" y2="-1"/>
        
        <polygon fill="black" points="1.15,0.025 1.2,0, 1.15,-0.025"/>
        <polygon fill="black" points="0.025,-1.15 0,-1.2, -0.025,-1.15"/>

        <text x="-1.08" y="-0.06" font-size="0.11" font-family="monospace">{{-pointsStore.newPoint.r}}</text>
        <text x="-0.58" y="-0.06" font-size="0.11" font-family="monospace">{{-pointsStore.newPoint.r/2}}</text>
        <text x="0.42" y="-0.06" font-size="0.11" font-family="monospace">{{pointsStore.newPoint.r/2}}</text>
        <text x="0.92" y="-0.06" font-size="0.11" font-family="monospace">{{pointsStore.newPoint.r}}</text>
        <text x="0.03" y="-0.95" font-size="0.11" font-family="monospace">{{pointsStore.newPoint.r}}</text>
        <text x="0.03" y="-0.45" font-size="0.11" font-family="monospace">{{pointsStore.newPoint.r/2}}</text>
        <text x="0.03" y="0.55" font-size="0.11" font-family="monospace">{{-pointsStore.newPoint.r/2}}</text>
        <text x="0.03" y="1.15" font-size="0.11" font-family="monospace">{{-pointsStore.newPoint.r}}</text>

        <circle r="0.025" 
                :cx="pointsStore.newPoint.x / pointsStore.newPoint.r" 
                :cy="-pointsStore.newPoint.y / pointsStore.newPoint.r"
                :fill="pointColor"/>
    </svg>
</template>

<style>
svg {
    border-radius: 10px;
    width: min(300px, 70vw); height: min(300px, 70vw);
}
</style>
