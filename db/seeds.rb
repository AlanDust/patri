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

nature = Project.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/nature.jpg", title: "Mother Nature", description: "Acrylics on glass bottle"})

portrait_two = Portrait.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/portraits/1.png", title: "Galadriel", description: "Watercolor pencils and oil on canvas paper"})
portrait_three = Portrait.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/portraits/2.png", title: "Russel Crowe Portrait", description: "Graphite pencils"})
portrait_four = Portrait.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/portraits/3.png", title: "Boy's Portrait (unfinished)", description: "Watercolor pencils"})
portrait_five = Portrait.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/portraits/4.png", title: "Salome", description: "Charcoal"})
portrait_six = Portrait.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/mermaid.jpg", title: "Mermaid", description: "Acrylics on glass bottle"})

sammy = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/sammy.jpg", title: "Sammy", description: "Pastel and watercolor pencils"})
dog_and_cat = Animal.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/dog_and_cat.jpg", title: "Puppy and Kitten", description: "Watercolor pencils"})
birds = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/birds.jpg", title: "Birds", description: "Acrylics on glass bottle"})
black_cat = Animal.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/black_cat.jpg", title: "Black Cat", description: "Acrylics on glass bottle"})
siamese_cat = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/siamese_cat.jpg", title: "Siamese Cat", description: "Acrylics on glass bottle"})
white_cat = Animal.create({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/white_cat.jpg", title: "White Cat", description: "Acrylics on glass bottle"})

music_one = MusicInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/music+1.png"})
music_two = MusicInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/music+2.png"})
music_three = MusicInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/music+3.png"})
music_four = MusicInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/music+4.png"})
music_five = MusicInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/music+5.png"})
music_six = MusicInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/music+6.png"})

cat_one = CatInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/cats+1.png"})
cat_two = CatInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/cats+2.png"})
cat_three = CatInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/cats+3.png"})
cat_four = CatInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/cats+4.png"})

nature_one = NatureInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Nature+1.png"})
nature_two = NatureInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Nature+2.png"})
nature_three = NatureInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Nature+3.png"})
nature_four = NatureInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Nature+4.png"})

art_history_one = ArtHistoryInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Art+History+1.png"})
art_history_two = ArtHistoryInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Art+History+2.png"})
art_history_three = ArtHistoryInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Art+History+3.png"})
art_history_four = ArtHistoryInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Art+History+4.png"})
art_history_five = ArtHistoryInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Art+History+5.png"})
art_history_six = ArtHistoryInspiration.create ({ artist_id: 1, picture: "https://s3.amazonaws.com/patri-website/inspirations/Art+History+6.png"})
