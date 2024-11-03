<template>
  <div class="create-activity">
    <h1>Create Activity</h1>
    <form @submit.prevent="createActivity">
      <label>
        Name:
        <input type="text" v-model="name" required />
      </label>
      <label>
        Type:
        <select v-model="type" required>
          <option value="Run">Run</option>
          <option value="Ride">Ride</option>
          <option value="Swim">Swim</option>
        </select>
      </label>
      <label>
        Start Date (Local):
        <input type="datetime-local" v-model="startDateLocal" required />
      </label>
      <label>
        Elapsed Time (seconds):
        <input type="number" v-model="elapsedTime" required />
      </label>
      <label>
        Description:
        <textarea v-model="description"></textarea>
      </label>
      <label>
        Distance (meters):
        <input type="number" v-model="distance" required />
      </label>
      <label>
        Trainer:
        <input type="checkbox" v-model="trainer" />
      </label>
      <label>
        Commute:
        <input type="checkbox" v-model="commute" />
      </label>
      <button type="submit">Create Activity</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { createActivity } from '@/services/stravaApi';

export default {
  name: 'CreateActivity',
  setup() {
    const store = useStore();
    const router = useRouter();

    // Form data
    const name = ref('');
    const type = ref('Run');
    const startDateLocal = ref('');
    const elapsedTime = ref(0);
    const description = ref('');
    const distance = ref(0);
    const trainer = ref(false);
    const commute = ref(false);

    const createActivityHandler = async () => {
      const activityData = {
        name: name.value,
        type: type.value,
        start_date_local: startDateLocal.value,
        elapsed_time: elapsedTime.value,
        description: description.value,
        distance: distance.value,
        trainer: trainer.value,
        commute: commute.value,
      };

      const accessToken = store.state.auth.accessToken;

      try {
        await createActivity(activityData, accessToken);
        router.push('/activities');
      } catch (error) {
        console.error('Error creating activity:', error);
      }
    };

    return {
      name,
      type,
      startDateLocal,
      elapsedTime,
      description,
      distance,
      trainer,
      commute,
      createActivity: createActivityHandler,
    };
  },
};
</script>

<style scoped>
.create-activity {
  max-width: 600px;
  margin: 20px auto;
}
label {
  display: block;
  margin-bottom: 10px;
}
button {
  margin-top: 20px;
}
</style>
