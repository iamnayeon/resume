import { memo, useMemo } from "react";
import ReactDOM from "react-dom";

interface PortalProp {
  children: any;
  uniqId: string;
}
const Portal = memo(({ children, uniqId }: PortalProp) => {
  const portalElement: HTMLElement = useMemo(() => {
    let target = document.getElementById(uniqId);
    if (!target) {
      target = document.createElement("div");
      target.setAttribute("id", uniqId);
      document.body.appendChild(target);
    }
    return target;
  }, [uniqId]);

  return ReactDOM.createPortal(children, portalElement);
});

export default Portal;
