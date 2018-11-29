require 'rails_helper'

RSpec.describe Artist, type: :model do
  it { should have_valid(:name).when("Patri") }
  it { should_not have_valid(:name).when(nil, "") }
  it { should have_valid(:biography).when("This is a Biography") }
  it { should have_valid(:picture).when(nil, "") }
end
