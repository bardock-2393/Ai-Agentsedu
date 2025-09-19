export default function BackgroundBlur() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-background min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
}
