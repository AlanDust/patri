import PaintingsContainer from '../../../app/javascript/react/containers/PaintingsContainer'
import PaintingTile from '../../../app/javascript/react/components/PaintingTile'
import { mount } from 'enzyme';

describe('PaintingsContainer', () => {
  let wrapper;
  let data = [{
    paintingList: [{
      id:1,
      title: "Painting Title",
      picture: "https://s3.amazonaws.com/patri-website/Patri.jpg",
      description: "this is a beautiful painting"
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <PaintingTile
        key = {data[0].paintingList[0].id}
        id = {data[0].paintingList[0].id}
        title = {data[0].paintingList[0].title}
        picture = {data[0].paintingList[0].picture}
        description = {data[0].paintingList[0].description}
      />
    )
  })
  it('should have a list of paintings on the painting index page', () => {
    expect(wrapper.find(PaintingTile)).toBePresent();
  });
  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });
  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
});
