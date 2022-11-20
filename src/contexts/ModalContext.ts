import { createContainer } from "unstated-next";
import { useState } from "react";

export default createContainer(() => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return {
    isOpened,
    setIsOpened,
  };
});
