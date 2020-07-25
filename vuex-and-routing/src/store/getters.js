export default {
  petsCount: ({ cats, dogs }) => cats.length + dogs.length,
  getAllCats: ({ pets }) => pets.filter(({ species }) => species === 'cat')
}
