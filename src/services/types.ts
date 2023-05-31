export type TPost = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export type TComment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export type TUser = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number,
    }
  },
  phone: string,
  website: string,
  company: {
    name :string,
    catchPhrase: string,
    bs: string
  }
};