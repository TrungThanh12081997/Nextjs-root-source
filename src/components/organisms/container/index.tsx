import * as React from 'react';
import styles from '@/components/organisms/container/Container.module.scss'
import clsx from 'clsx';
export interface IContainerProps {
    children: React.ReactNode;
}

const Container = ({children}: IContainerProps) => {
  return (
    <div className={clsx('container',styles.container)}>
      {children}
    </div>
  );
};

export default Container;
