<template>
    <div class="burger" :class="{ 'active' : isOpen }">
        <div class="burger-button">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BurgerButton extends Vue {
    @Prop({ type: Boolean, default: false})
    isOpen: boolean
}
</script>

<style lang="scss">
.burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    cursor: pointer;
    transition: transform .6s cubic-bezier(.165,.84,.44,1);
}

.burger-bar {
    background-color: black;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);

    &--1 {
        transform: translateY(-6px);
    }

    &--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    &--3 {
        transform: translateY(6px);
    }
}

.burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
}

.burger-bar--2:hover {
    transform: scaleX(1);
}

.burger.active {
    .burger-button {
        transform: rotate(-180deg);
    }

    .burger-bar--1 {
        transform: rotate(45deg)
    }

    .burger-bar--2 {
        opacity: 0;
    }

    .burger-bar--3 {
        transform: rotate(-45deg)
    }
}
</style>
