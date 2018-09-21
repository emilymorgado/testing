import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// the name of this file is important
// Jest will look for this file and then execute
// it first
