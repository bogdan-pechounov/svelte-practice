<script>
  import FeedbackForm from './components/FeedbackForm.svelte'
  import FeedbackList from './components/FeedbackList.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'

  let feedback = [
    {
      id: 1,
      rating: 9,
      text: 'Irure adipisicing labore nisi ullamco veniam incididunt. Id ullamco amet consequat tempor sunt excepteur. Aliquip minim veniam sit cillum veniam Lorem commodo aliqua sunt commodo magna commodo. Ex in consectetur aute minim laboris nulla. Enim do reprehenderit do aliquip irure eu sint tempor velit officia consectetur do in.',
    },
    {
      id: 2,
      rating: 8,
      text: 'Cillum do eiusmod consectetur aute ut duis magna occaecat non. Duis proident Lorem cupidatat non occaecat excepteur pariatur. Pariatur et magna occaecat officia laborum consectetur.',
    },
  ]

  $: count = feedback.length
  $: average =
    feedback.reduce((prev, { rating }) => prev + rating, 0) / feedback.length

  const deleteFeedback = (e) => {
    const id = e.detail
    feedback = feedback.filter((item) => item.id !== id)
  }

  const addFeedback = (e) => {
    const newFeedback = e.detail
    feedback = [newFeedback, ...feedback]
  }
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
