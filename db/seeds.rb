# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

patri = Artist.create({ name: "Patricia De Andres Flores", picture: "https://s3.amazonaws.com/patri-website/Patri.jpg", biography: "Biography goes here"})

monet = Artwork.create({ picture: "https://s3.amazonaws.com/patri-website/monet.jpg", title: "Copy of 'Monet's garden at Vétheuil (1880)'", description: "A copy of Monet's 'Garden at Vétheuil (1880)'"})
sammy = Artwork.create({ picture: "https://s3.amazonaws.com/patri-website/sammy.jpg", title: "Sammy", description: "A tribute to a friend's fallen beloved cat, Sammy."})
birds = Artwork.create({ picture: "https://s3.amazonaws.com/patri-website/birds.jpg", title: "Birds", description: "Birds on a tree"})
black_cat = Artwork.create ({ picture: "https://s3.amazonaws.com/patri-website/black_cat.jpg", title: "Black Cat", description: "Description of black cat bottle here"})
cat = Artwork.create ({ picture: "https://s3.amazonaws.com/patri-website/cat.jpg", title: "Cat drawing title here", description: "Description of Cat drawing here"})
dog_and_cat = Artwork.create ({ picture: "https://s3.amazonaws.com/patri-website/dog_and_cat.jpg", title: "Cat and Dog drawing title here", description: "Description of cat and dog drawing here"})
mermaid = Artwork.create ({ picture: "https://s3.amazonaws.com/patri-website/mermaid.jpg", title: "mermaid bottle title here", description: "Description of mermaid bottle here"})
nature = Artwork.create({ picture: "https://s3.amazonaws.com/patri-website/nature.jpg", title: "nature bottle title here", description: "Description of nature bottle here"})
patri_and_lorena = Artwork.create({ picture: "https://s3.amazonaws.com/patri-website/patri_and_lorena.jpg", title: "Patri and Lorena drawing", description: "Description of Patri and Lorena drawing here"})
siamese_cat = Artwork.create({ picture: "https://s3.amazonaws.com/patri-website/siamese_cat.jpg", title: "Siamese cat bottle title here", description: "Siamese Cat bottle description here"})
white_cat = Artwork.create({ picture: "https://s3.amazonaws.com/patri-website/white_cat.jpg", title: "White cat bottle title here", description: "White cat bottle description here"})

Category.create([
  { medium: "painting", artist_id: 1, artwork_id: 1},
  { medium: "drawing", artist_id: 1, artwork_id: 2},
  { medium: "bottle", artist_id: 1, artwork_id: 3},
  { medium: "bottle", artist_id: 1, artwork_id: 4},
  { medium: "bottle", artist_id: 1, artwork_id: 5},
  { medium: "drawing", artist_id: 1, artwork_id: 6},
  { medium: "drawing", artist_id: 1, artwork_id: 7},
  { medium: "bottle", artist_id: 1, artwork_id: 8},
  { medium: "bottle", artist_id: 1, artwork_id: 9},
  { medium: "drawing", artist_id: 1, artwork_id: 10},
  { medium: "bottle", artist_id: 1, artwork_id: 11},
  { medium: "bottle", artist_id: 1, artwork_id: 12},
  ])
