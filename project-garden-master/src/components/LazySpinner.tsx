import { useEffect, useState } from "react";

interface Props {
  show: boolean;
  delay?: number;
}

/**
 * Basic lazy spinner component.
 * To change the spinner size, change the parent element's size.
 * @param show Whether the spinner should be displayed.
 * @param delay - milliseconds
 * @example
 * <div className="w-64 h-64 m-auto">
 *   <LazySpinner show={true} delay={9000} />
 * </div>
 */
export default function LazySpinner(props: Props) {
  const { show = false, delay = 0 } = props;
  const [showSpinner, setShowSpinner] = useState(show);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!show) {
      setShowSpinner(false);
      return;
    }
    if (delay === 0) {
      setShowSpinner(true);
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);

  return showSpinner ? (
    <svg
      className="animate-spin -ml-1 mr-3 text-blue-900 h-max w-max"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      data-testid="lazy-spinner"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ) : null;
}
