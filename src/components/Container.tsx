import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
  return <Component className={`container${className ? ` ${className}` : ''}`}>{children}</Component>;
}
