import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { Feedback } from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
});

it('Renders some feedback', () => {
    let FEEDBACK = 'This is some test feedback';

    let wrapper = shallow(<Feedback feedback={FEEDBACK} />);
    expect(wrapper.contains(FEEDBACK)).toEqual(true);
});