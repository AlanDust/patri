# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.create([
  { name: "Patricia De Andres Flores", picture: "https://s3.amazonaws.com/patri-website/Patri.jpg", biography: "Art and cultural history verify our need self expression, especially artistic expressions. This element in our story is one way to understand the link between human nature and Nature.

The delicate dance between them, Nature and Humanity has fascinated artist since man began scrawling on cave walls, where even the act of creating artwork  defaced the raw beauty of the stone. As society grows, this interaction is unavoidable, imperative, beautiful and tragic.

From the beginning of human history, nature has played a vital role in our creative expressions. The shapes in the lands, the curves in animal´s movements, the colors of the rainbow, the bright of the water we rely on for daily survival condition how we view, interpret and feel the world around us. And in turn, the Art we create from nature´s inspiration becomes part of our personal and cultural and vital identity."}
])

monet = Project.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/monet.jpg", title: "Copy of 'Monet's garden at Vétheuil (1880)'", description: "A copy of Monet's 'Garden at Vétheuil (1880)'"})
nature = Project.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/nature.jpg", title: "nature bottle title here", description: "Description of nature bottle here"})

patri_and_lorena = Portrait.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/patri_and_lorena.jpg", title: "Patri and Lorena drawing", description: "Description of Patri and Lorena drawing here"})

cat = Animal.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/cat.jpg", title: "Cat drawing title here", description: "Description of Cat drawing here"})
dog_and_cat = Animal.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/dog_and_cat.jpg", title: "Cat and Dog drawing title here", description: "Description of cat and dog drawing here"})
sammy = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/sammy.jpg", title: "Sammy", description: "A tribute to a friend's fallen beloved cat, Sammy."})
birds = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/birds.jpg", title: "Birds", description: "Birds on a tree"})
black_cat = Animal.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/black_cat.jpg", title: "Black Cat", description: "Description of black cat bottle here"})
mermaid = Animal.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/mermaid.jpg", title: "mermaid bottle title here", description: "Description of mermaid bottle here"})
siamese_cat = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/siamese_cat.jpg", title: "Siamese cat bottle title here", description: "Siamese Cat bottle description here"})
white_cat = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/white_cat.jpg", title: "White cat bottle title here", description: "White cat bottle description here"})
