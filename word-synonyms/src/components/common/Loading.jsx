export const Loading = ({ loading = false }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="flex justify-center items-center align-middle">
      <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600 mt" />
    </div>
  );
};
