interface UserService {
  Create(): string
}

class userService implements UserService {
  Create(){
    return "Create successfully."
  }
}

export {
  userService,
  UserService
}
