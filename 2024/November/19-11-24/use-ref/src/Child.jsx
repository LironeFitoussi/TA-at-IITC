import { useRef, useEffect } from "react";
const Child = () => {
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    // function renderer() {
    //     renderCount.current = renderCount.current + 1;
    // }

    // renderer()

  return (
    <>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
};

export default Child;
