import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogsService {
  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log(response.data)
    const blogs = response.data.map((blogPOJO) => new Blog(blogPOJO))
    AppState.blogs = blogs
  }

}

export const blogsService = new BlogsService()