const { startNewWorkflow } = electronApi;

const startWorkflowBtn = document.querySelector('.startWorkflow');

startWorkflowBtn.addEventListener('click', () => {
  startNewWorkflow();
});
