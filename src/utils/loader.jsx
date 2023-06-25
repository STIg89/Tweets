import PropagateLoader from 'react-spinners/PropagateLoader';

export function Loader() {
  return (
    <div className="py-2.5 h-12 flex justify-center mt-20">
      <PropagateLoader
        color="#3e85f3"
        size={28}
        speedMultiplier={1}
        cssOverride={{
          margin: '0 auto',
        }}
      />
    </div>
  );
}
