import React from "react";

interface StyleProps {
  child: JSX.Element;
  addedClass: string;
}

export default function StyleInjector({
  child,
  addedClass,
}: StyleProps): JSX.Element {
  function StyledChildren(): JSX.Element {
    return React.cloneElement(child, {
      className: `${child.props.className} ${addedClass} `,
    });
  }

  return <StyledChildren />;
}
