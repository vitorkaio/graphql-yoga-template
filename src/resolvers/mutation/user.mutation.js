const CREATE_USER = 'CREATE_USER'

const User = {
  async createUser(_, { name, age }, { pubsub }) {
    const newUser = {name, age}
    pubsub.publish(CREATE_USER, { userAdded: newUser })
    return newUser
  }
}

export default User
