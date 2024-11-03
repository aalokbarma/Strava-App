<template>
  <div class="activities">
    <h1>Your Activities</h1>
    <button @click="$router.push('/create-activity')">Create Activity</button>
    <div v-if="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </div>
    <div v-else>
      <p>No activities found.</p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ActivityItem from '@/components/ActivityItem.vue';
import { getActivities } from '@/services/stravaApi';

export default {
  name: 'MainActivities',
  components: { ActivityItem },
  setup() {
    const store = useStore();
    const router = useRouter();
    const activities = ref([]);

    const fetchActivities = async () => {
      const accessToken = store.state.auth.accessToken;
      try {
        activities.value = await getActivities(accessToken);
      } catch (error) {
        console.error('Error fetching activities:', error);
        router.push('/');
      }
    };

    onMounted(fetchActivities);

    return { activities };
  },
};
</script>

<style scoped>
.activities {
  max-width: 600px;
  margin: 20px auto;
}
button {
  margin-bottom: 20px;
}
</style>
