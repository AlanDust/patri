import ProjectsContainer from '../../../app/javascript/react/containers/ProjectsContainer'
import ProjectTile from '../../../app/javascript/react/components/ProjectTile'
import { mount } from 'enzyme';

describe('ProjectsContainer', () => {
  let wrapper;
  let data = [{
    projectList: [{
      id:1,
      title: "Project Title",
      picture: "https://s3.amazonaws.com/patri-website/Patri.jpg",
      description: "this is a beautiful project"
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <ProjectTile
        key = {data[0].projectList[0].id}
        id = {data[0].projectList[0].id}
        title = {data[0].projectList[0].title}
        picture = {data[0].projectList[0].picture}
        description = {data[0].projectList[0].description}
      />
    )
  })
  it('should have a list of projects on the project index page', () => {
    expect(wrapper.find(ProjectTile)).toBePresent();
  });
  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });
  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });
});
