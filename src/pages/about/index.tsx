import * as React from 'react';
import styles from './about.module.css';
import clsx from 'clsx';
export interface IAboutPageProps {
}

const AboutPage = (props: IAboutPageProps) => {
  return (
    <div className='div'>
      <div className={clsx('div_div',styles.div)}>
        about
      </div>
    </div>
  );
};

export default AboutPage;
