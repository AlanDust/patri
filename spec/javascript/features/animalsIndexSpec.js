import AnimalsContainer from '../../../app/javascript/react/containers/AnimalsContainer'
import AnimalTile from '../../../app/javascript/react/components/AnimalTile'
import { mount } from 'enzyme';

describe('AnimalsContainer', () => {
  let wrapper;
  let data = [{
    animalList: [{
      id: 1,
      title: "Animal Title",
      picture: "https://s3.amazonaws.com/patri-website/Patri.jpg",
      description: "this is a beautiful animal"
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <AnimalTile
        key = {data[0].animalList[0].id}
        id = {data[0].animalList[0].id}
        title = {data[0].animalList[0].title}
        picture = {data[0].animalList[0].picture}
        description = {data[0].animalList[0].description}
      />
    )
  })
  it('should have a list of animals on the animal index page', () => {
    expect(wrapper.find(AnimalTile)).toBePresent();
  });
  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });
  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
});
