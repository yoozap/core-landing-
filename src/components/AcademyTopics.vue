<template>
  <section class="container" data-aos="fade-up">
    <div class="topics_section">
      <h2 class="topics-ttl">Explore Our Topics</h2>
      <div class="topics_container">
        <div class="topic" v-for="(topic, index) in topics" :key="index" @click="setTopic(topic.name)" :class="[topicNumber == 1 && $store.state.firstTopic == topic.name ? 'active' : '',topicNumber == 2 && $store.state.secondTopic == topic.name ? 'active' : '']">
          {{ topic.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        topicNumber: {
            type: Number
        }
    },
  data() {
    return {
      topics: [
        {
          name: "cmcx"
        },
        {
          name: "blockchain"
        },
        {
          name: "consensus"
        },
        {
          name: "trading"
        },
        {
          name: "mining"
        },
        {
          name: "security"
        },
        {
          name: "wallet"
        },
        {
          name: "tutorials"
        },
        {
          name: "ethereum"
        },
        {
          name: "cryptography"
        },
        {
          name: "economics"
        }
      ]
    };
  },
    methods: {
        setTopic (name) {
            if(this.topicNumber == 1){
                this.$store.commit('setFirstTopic', name)
            }
            if(this.topicNumber == 2){
                this.$store.commit('setSecondTopic', name)
            }

        }
    }
};
</script>

<style scoped>
.topics_section {
  margin-top: 80px;
}
.topics_container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  padding-right: 250px;
}
.topic {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 4px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: 0.6s;
}
.topic:hover {
  background: #fff;
  color: #00050f;
}
.topic.active {
  background: #fff;
  color: #00050f;
}

@media (max-width: 1300px) {
  .topics_container {
    padding-right: 100px;
  }
}

@media (max-width: 1023px) {
  .topics_container {
    padding-right: 50px;
  }
}

@media (max-width: 767px) {
  .topics_container {
    padding-right: 0px;
  }
}
</style>
