import PortraitsContainer from '../../../app/javascript/react/containers/PortraitsContainer'
import PortraitTile from '../../../app/javascript/react/components/PortraitTile'
import { mount } from 'enzyme';

describe('PortraitsContainer', () => {
  let wrapper;
  let data = [{
    portraitList: [{
      id:1,
      title: "Portrait Title",
      picture: "https://s3.amazonaws.com/patri-website/Patri.jpg",
      description: "this is a beautiful portrait"
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <PortraitTile
        key = {data[0].portraitList[0].id}
        id = {data[0].portraitList[0].id}
        title = {data[0].portraitList[0].title}
        picture = {data[0].portraitList[0].picture}
        description = {data[0].portraitList[0].description}
      />
    )
  })
  it('should have a list of portraits on the portrait index page', () => {
    expect(wrapper.find(PortraitTile)).toBePresent();
  });
  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });
  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
});
