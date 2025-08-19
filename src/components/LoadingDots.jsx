export default function LoadingDots() {
  return (
    <span className="flex space-x-1 items-center justify-center">
      <span><p>Our A.I Wizard is thinking</p></span>  
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
    </span>
  );
}