import Demo from '@/components/templates/demo';
import { getDemoService } from '@/services/demo';
import * as React from 'react';

export interface IHomeProps {
}

const Home = (props: IHomeProps) => {
  const res = getDemoService();
  console.log('res',res)
  return (
    <div>
      <Demo/>
    </div>
  );
};

export default Home;
