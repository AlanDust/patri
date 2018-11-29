import DrawingsContainer from '../../../app/javascript/react/containers/DrawingsContainer'
import DrawingTile from '../../../app/javascript/react/components/DrawingTile'
import { mount } from 'enzyme';

describe('DrawingsContainer', () => {
  let wrapper;
  let data = [{
    drawingList: [{
      id: 1,
      title: "Drawing Title",
      picture: "https://s3.amazonaws.com/patri-website/Patri.jpg",
      description: "this is a beautiful drawing"
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <DrawingTile
        key = {data[0].drawingList[0].id}
        id = {data[0].drawingList[0].id}
        title = {data[0].drawingList[0].title}
        picture = {data[0].drawingList[0].picture}
        description = {data[0].drawingList[0].description}
      />
    )
  })
  it('should have a list of drawings on the drawing index page', () => {
    expect(wrapper.find(DrawingTile)).toBePresent();
  });
  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });
  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
});
