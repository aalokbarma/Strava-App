<template>
  <div class="activity-item">
    <h3>{{ activity.name }}</h3>
    <p>Sport Type: {{ activity.sport_type }}</p>
    <p>Distance: {{ (activity.distance / 1000).toFixed(2) }} km</p>
    <p>Average Speed: {{ activity.average_speed.toFixed(2) }} m/s</p>
    <p>Max Speed: {{ activity.max_speed.toFixed(2) }} m/s</p>
    <p>Heart Rate: {{ activity.average_heartrate || 'N/A' }} bpm</p>
  </div>
</template>

<script>
export default {
  name: 'ActivityItem',
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.activity-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
</style>
