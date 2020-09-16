<template>
  <div class="md-content">
    <div v-if="content">
      <VueShowdown flavor="original" :markdown="content" />
    </div>
    <div v-else>
      <!--No content at this time-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown)

@Component
export default class MarkdownContent extends Vue {
  @Prop()
  public content: string;
}

</script>

<style lang="scss">
.md-content {
  padding: 0 20px;
}

/* big blue block with date and place of event */
.event-date {
  background-color: $event-date-bg;
  margin: 25px -20px;
  color: $event-date-light;
  text-shadow: 0 4px 6px rgba(64, 67, 107, 0.34);
  font: 400 1.8rem $oswald-font-family;
  display: flex;
  align-items: center;

  .day {
    border-right: 2px solid $event-date-dark;
    padding: 10px 20px;
    position: relative;
    min-width: 190px;

    .week-day {
      position: absolute;
      left: 85px;
    }

    .date {
      text-transform: uppercase;
      font: 400 3.2rem/3.2rem $oswald-font-family;

      .date-number {
        display: inline-block;
        font: 400 6.4rem/6.4rem $oswald-font-family;
        letter-spacing: -0.2rem;
        color: $event-date-dark;
        margin-right: 10px;
        width: 55px;
      }
    }
  }

  .place {
    padding: 10px 20px;

    .city {
      color: $event-date-dark;
      font-size: 2.4rem;
    }
  }
}
/* end of blue block */

.program-event {
  display: block;
  color: $text-color;
  text-decoration: none;
  min-height: 140px;
  position: relative;
  margin-bottom: 25px;

  &:hover {
    color: darken($text-color, 50%);
    // background-color: $main-bg;
  }
}

.event-img {
  max-width: 250px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.event-description {
  padding-bottom: 10px;
  padding-left: 265px;

  .event-title {
    margin-bottom: auto;
  }

  p {
    line-height: 2rem;
    margin-bottom: auto;
  }
}

.event-title {
  font: bold 1.6rem $kelson-font-family;
  text-transform: uppercase;

  &.red {
    color: $title;
    margin-bottom: 15px;
  }
}

.event-time {
  color: $title;
  font-weight: bold;
}

.event-place {
  padding: 10px 15px;
  text-decoration: underline;
  position: relative;

  &:before {
    content: '•';
    color: $title;
    position: absolute;
    left: 0;
    right: 0;
  }
}

.event-subtitle {
  padding-bottom: 10px;
}

.participants {
  h2 {
    color: $title;
    font: 400 2.4rem/2.8rem $oswald-font-family;

    span {
      &.lead {
        font: 500 1.8rem $oswald-font-family;
      }
      &.place {
        font: 300 1.8rem $oswald-font-family;
      }
    }
  }
}

.photo {
  display: block;
  width: 400px;
  margin: 0 20px 15px 0;
  float: left;
}

.italic-center {
  font-style: italic;
  text-align: center;
  max-width: 70%;
  margin: 0 auto 30px;
}

.article-preview {
  display: flex;
  margin: 0 -20px 15px;

  .preview-img {
    display: block;
    min-width: 250px;
    width: 250px;
    height: 140px;
    margin-right: 20px;
  }

  .preview-title {
    text-transform: uppercase;
    font-weight: bold;
  }

  .preview-link {
    font-weight: bold;
    color: $title;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
