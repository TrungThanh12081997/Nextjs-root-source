import * as React from 'react';
import styles from '@/components/templates/demo/Demo.module.scss'
import clsx from 'clsx';
import { useAppSelector } from '@/store/hooks';
import Container from '@/components/organisms/container';
export interface IDemoProps {
}

const Demo = ({}: IDemoProps) => {
  const store = useAppSelector(store => store );
  console.log('store',store);

  return (
    <div className={clsx('div',styles.demo)}>
      <Container>

      Demo
      </Container>
    </div>
  );
};

export default Demo;
