export class Blog {
  constructor(data) {
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.published = data.published
    this.creator = data.creator
    this.id = data.id || data._id
    this.creatorId = data.creatorId
  }

}