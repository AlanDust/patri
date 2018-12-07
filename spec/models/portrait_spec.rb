require 'rails_helper'

RSpec.describe Project, type: :model do
  it { should have_valid(:picture).when("Image") }
  it { should_not have_valid(:picture).when(nil, "") }
end
