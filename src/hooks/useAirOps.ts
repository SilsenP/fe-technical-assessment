import AirOps from "@airops/airops-js";

const airOpsInstance = new AirOps({
  userId: import.meta.env.VITE_USER_ID,
  workspaceId: import.meta.env.VITE_WORKSPACE_ID,
  hashedUserId: import.meta.env.VITE_HASHED_USER_ID,
});

const useAirOps = () => {
  const getWorkflowResults = async (executionId: string) => {
    return airOpsInstance.apps.getResults({ executionId });
  }

  return {
    getWorkflowResults,
  };
}

export default useAirOps;