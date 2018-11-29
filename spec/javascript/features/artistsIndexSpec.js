import ArtworksContainer from '../../../app/javascript/react/containers/ArtworksContainer'
import HomepageArtistComponent from '../../../app/javascript/react/components/HomepageArtistComponent'

describe('ArtworksContainer', () => {
  let wrapper;
  let data = [{
    artistList: [{
      id:1,
      name: "Patricia",
      biography: "Biography goes here",
      picture: "https://s3.amazonaws.com/patri-website/Patri.jpg"
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <HomepageArtistComponent
        key = {data[0].artistList[0].id}
        id = {data[0].artistList[0].id}
      />
    )
  })
  it('should have a list of artists on the index page', () => {
    expect(wrapper.find(HomepageArtistComponent)).toBePresent();
  });
  it('should check if the h1 tag is rendered', () => {
    expect(wrapper.find('h1')).toBePresent()
  });
  it('should have a link to additional index pages', () => {
    expect(wrapper.find('Link')).toBePresent()
  });

});
