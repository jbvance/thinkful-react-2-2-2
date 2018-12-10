
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';


import { AuralStatus } from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders an aural status update', () => {
    let AURAL_STATUS = 'This is the aural status';
    
    let wrapper = shallow(<AuralStatus auralStatus={AURAL_STATUS} />);
    expect(wrapper.contains(AURAL_STATUS)).toEqual(true);
  });
  
});