import BottlesContainer from '../../../app/javascript/react/containers/BottlesContainer'
import BottleTile from '../../../app/javascript/react/components/BottleTile'
import { mount } from 'enzyme';

describe('BottlesContainer', () => {
  let wrapper;
  let data = [{
    bottleList: [{
      id:1,
      title: "Bottle Title",
      picture: "https://s3.amazonaws.com/patri-website/Patri.jpg",
      description: "this is a beautiful bottle"
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <BottleTile
        key = {data[0].bottleList[0].id}
        id = {data[0].bottleList[0].id}
        title = {data[0].bottleList[0].title}
        picture = {data[0].bottleList[0].picture}
        description = {data[0].bottleList[0].description}
      />
    )
  })
  it('should have a list of bottles on the bottle index page', () => {
    expect(wrapper.find(BottleTile)).toBePresent();
  });
  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });
  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
});
