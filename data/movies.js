const movies = [
  {title: "Interstellar", watched: true, _id: 24242},
  {title: "Shang-Chi", watched: true, _id: 46546},
  {title: "Dune", watched: false, _id: 67556},
  {title: "Black Widow", watched: true, _id: 54456},
  {title: "Snake Eyes", watched: false, _id: 97654}
]

const find = (conditions, callback) => {
  try {
    if(!(conditions instanceof Object)) {
      throw new TypeError("Please pass in an object")
    }
    if(Object.keys(conditions).length === 0) {
      return callback(null, movies)
    }
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}